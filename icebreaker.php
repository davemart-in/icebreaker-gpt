<?php
/**
 * Plugin Name: Icebreaker
 * Plugin URI: https://automattic.com
 * Description: A simple Gutenberg block plugin which shares a random icbreaker question
 * Version: 1.0
 * Author: ChatGPT + Dave M
 * Author URI: https://automattic.com
 * License: GPL2
 */

 // Load the block scripts and styles
function icebreaker_block_scripts() {
	wp_enqueue_style(
		'icebreaker-block-frontend',
		plugins_url( 'icebreaker-block-frontend.css', __FILE__ ),
		array()
	);
	wp_enqueue_style(
		'icebreaker-block-editor',
		plugins_url( 'icebreaker-block-editor.css', __FILE__ ),
		array( 'wp-edit-blocks' )
	);
	wp_enqueue_script(
		'icebreaker-block-editor',
		plugins_url( 'icebreaker-block-editor.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-server-side-render' )
	);
}
add_action( 'enqueue_block_editor_assets', 'icebreaker_block_scripts' );

// Register a new block for the Gutenberg editor
function icebreaker_block_register() {
	register_block_type( 'a8c/icebreaker', array(
		'editor_style' => 'icebreaker-block-editor',
		'style' => 'icebreaker-block-frontend',
		'editor_script' => 'icebreaker-block-editor',
		'script' => 'icebreaker-block-frontend'
	) );
}
add_action( 'init', 'icebreaker_block_register' );