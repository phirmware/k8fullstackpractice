#! /usr/bin/env bash

echo $tag

docker build -t 09036229746/front:$tag -f dockerFile .