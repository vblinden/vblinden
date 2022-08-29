<?php

namespace App;

use Exception;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Parsedown as BaseParsedown;
use Spatie\ShikiPhp\Shiki;

class Parsedown extends BaseParsedown
{
    protected function blockFencedCodeComplete($block)
    {
        try {
            if ($class = Arr::get($block, 'element.text.attributes.class', false)) {
                if (Str::startsWith($class, 'language-')) {
                    $code = Arr::get($block, 'element.text.text', '');

                    $code = Shiki::highlight(
                        code: $code,
                        language: Str::after($class, 'language-'),
                        theme: 'github-dark-dimmed',
                    );

                    Arr::set($block, 'element.text.allowRawHtmlInSafeMode', true);
                    Arr::set($block, 'element.text.rawHtml', $code);
                    Arr::forget($block, 'element.text.text');
                } else {
                    $block = parent::blockFencedCodeComplete($block);
                }
            }

        } catch (Exception $e) {
            $block = parent::blockFencedCodeComplete($block);
        }

        return $block;
    }
}
