<?php

echo(shell_exec('tar -xf build.tar'));
echo(shell_exec('mv build/* .'));
echo(shell_exec('rm -rf build*'));
