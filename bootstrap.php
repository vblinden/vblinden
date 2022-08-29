<?php

use App\ParsedownParser;
use Illuminate\Container\Container;

/** @var $container Container */
$container->bind('markdownParser', ParsedownParser::class);
