FROM php:8.1-fpm

# Installer les extensions nécessaires pour Symfony
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libicu-dev \
    libonig-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-install intl pdo_mysql mbstring zip opcache gd \
    && docker-php-ext-configure gd --with-freetype --with-jpeg

# Installer Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
