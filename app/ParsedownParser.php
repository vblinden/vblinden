<?php

namespace App;

use Mni\FrontYAML\Markdown\MarkdownParser;

class ParsedownParser implements MarkdownParser
{
    public function __construct()
    {
        $this->parser = new Parsedown();
    }

    public function parse($markdown): string
    {
        return $this->parser->text($markdown);
    }
}
