#!/bin/bash -e
rclone sync build/ aws-perso:kelgors-tictactoe/ --verbose
