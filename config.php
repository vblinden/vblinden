<?php

return [
    'production' => false,
    'baseUrl' => '',
    'title' => 'vblinden',
    'description' => 'Hello friends, my name is Vincent van der Linden and you can find me online as @vblinden. I am currently working as a Software Engineer at team.blue. On this website you can find some thoughts and other babblings that I thought were important or useful enough to put online. Please enjoy.',
    'collections' => [
        'posts' => [
            'path' => 'posts/{filename}',
            'author' => 'vblinden',
        ]
    ],
    'readingTime' => static function ($page) {
        $wordCount = count(explode(' ', strip_tags($page->getContent())));
        $readingTimeInMinutes = (int)($wordCount / 125) ?: 1;

        return sprintf('%s min read (%s)', $readingTimeInMinutes, $wordCount);
    },
];
