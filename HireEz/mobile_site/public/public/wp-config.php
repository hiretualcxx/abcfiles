<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'mobilehireez' );

/** Database username */
define( 'DB_USER', 'mobilehireez' );

/** Database password */
define( 'DB_PASSWORD', 'TMgPSY7UoVZcCBK' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '=k2_)6,&Yy79k&<Outx`|5|ciJu]N>O.9BzQ|o#pKrb>+4%fbU7K4*?[X?^A%5< ' );
define( 'SECURE_AUTH_KEY',   'M3&2@k2)(G%5xx*9=uq#?YzgBIOs2~}Lx?Q5u$g)jlOOQV+i<srk/|rAHMipnfa9' );
define( 'LOGGED_IN_KEY',     'ol3Tah]{M%j7IIfT7A%*8fj-/6)z{)U,5&^7`Sa0PEX)r|YmOlLhiQI^ DR7a3A0' );
define( 'NONCE_KEY',         'FoNjjUnYWDP.m8l#kD_{g&x| KGZGD~RCZvSiUF(Ds[n#1Hb_-;eOrh`/*4A;3x4' );
define( 'AUTH_SALT',         'UY+n#Qjl{ELUO6)m3o6KE%K n5lzhw8JH/)5{<$TkyssL3cuf|{}8n#p#.OUSy/z' );
define( 'SECURE_AUTH_SALT',  '3@VKnk8bMcb:Uf4z09@Msm%DG]FkqYl-$$VhAwXLZwDo>IFn7PKk(mg$^5]!Nwa(' );
define( 'LOGGED_IN_SALT',    '(N`&V+Z{9^E4,d4]o![J!:=PMVIZK4Vx3EAZ1RGIu5ynS~u_hx$N=:rp9cu.iU6T' );
define( 'NONCE_SALT',        '5j?*<!//n%1XKupD[7je|q*^z?p%0Fz2[J*)9%>*X@f!)7+tZ.T*v&FH@fc%o^]x' );
define( 'WP_CACHE_KEY_SALT', 'Uk(6z>.fM/tk:|kR%E!SYv<bS.+jAt~oSyn9E&2^{*_Su}kpXKhaY,9%V|5#VZsv' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
