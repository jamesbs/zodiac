variable "app_repository" {
  default = "https://github.com/jamesbs/zodiac.git"
}

locals {
  app-instance-key-public  = "../../secrets/app-instance-key-public"
  app-instance-key-private = "../../secrets/app-instance-key-private"
}

provider "aws" {
  region                  = "us-east-2"
  shared_credentials_file = "../../secrets/credentials"
  profile                 = "terra"
}

resource "aws_instance" "app" {
  ami = "ami-0552e3455b9bc8d50"
  instance_type = "t2.micro"
  key_name = "${aws_key_pair.app.key_name}"
  vpc_security_group_ids = [
    "${aws_security_group.app_ssh.id}",
    "${aws_security_group.app_git.id}"
  ]

  tags {
    Name = "zodiac app"
  }
}

output "ssh-comm" {
  value = "ssh -i ../../secrets/app-instance-key-public ubuntu@${aws_instance.app.public_dns}"
}

resource "aws_security_group" "app_ssh" {
  name = "zodiac-sg-ssh"

  ingress {
    cidr_blocks = ["0.0.0.0/0"]
    from_port = 22
    to_port = 22
    protocol = "tcp"
  }
}

resource "aws_security_group" "app_git" {
  name = "zodiac-sg-git"

  egress {
    from_port = 9418
    to_port = 9418
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port = 443
    to_port = 443
    protocol = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_key_pair" "app" {
  key_name = "zodiac-app-ssh"
  public_key = "${local.app-instance-key-public}"
}
