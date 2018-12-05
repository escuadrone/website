<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb8ef3c36537611f223339dbf7699f965
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb8ef3c36537611f223339dbf7699f965::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb8ef3c36537611f223339dbf7699f965::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
