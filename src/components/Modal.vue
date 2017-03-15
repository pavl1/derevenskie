<template>
	<div class="modal">
		<div class="modal-fade-screen" v-on:click.self="close">
			<div class="modal-inner">
				<div class="modal-close" v-on:click="close"></div>
				<slot name="title"><h1>&lt;h1&gt;Заголовок&lt;/h1&gt;</h1></slot>
				<slot name="content">
                    <p>
						&lt;p class="modal-intro"&gt;Вступительный текст&lt;/p&gt;
						&lt;p class="modal-content"&gt;Основное содержание&lt;/p&gt;
                    </p>
                </slot>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/app/assets/stylesheets/neat";

	.modal {
		$base-border-color: #dcdcdc !default;
		$base-border-radius: 3px !default;
		$base-background-color: #fff !default;
		$base-font-size: 1em !default;
		$base-line-height: 1.5em !default;
		$action-color: #477dca !default;
		$dark-gray: #333 !default;
		$light-gray: #ddd !default;
		$medium-screen: 40em !default;
		$large-screen: 53.75em !default;
		$base-font-color: $dark-gray !default;
		$modal-padding: 3em;
		$modal-background: $base-background-color;
		$modal-close-color: $light-gray;
		$modal-image-height: 135px;
		$modal-image-width: $modal-image-height;
        position: absolute;
        z-index: 99999999999;

		.modal-fade-screen {
			@include position(fixed, 0);
			background-color: rgba(#000, 0.85);
			// opacity: 0;
			padding-top: 0.6em;
			text-align: left;
			// transition: opacity 0.25s ease;
			// visibility: hidden;
			z-index: 99999999999;

			@include media($large-screen) {
				padding-top: 10em;
			}

			.modal-bg {
				@include position(absolute, 0);
				cursor: pointer;
			}
		}

		.modal-close {
			@include position(absolute, ($modal-padding /2) ($modal-padding /2) null null);
			@include size(1.5em);
			background: $modal-background;
			cursor: pointer;

			&::after,
			&::before {
				@include position(absolute, 3px 3px 0 50%);
				@include size(0.15em 1.5em);
				background: $modal-close-color;
				content: "";
				display: block;
				margin: -3px 0 0 -1px;
				transform: rotate(45deg);
			}

			&:hover::after,
			&:hover::before {
				background: darken($modal-close-color, 10%);
			}

			&::before {
				transform: rotate(-45deg);
			}
		}

		.modal-inner {
			background: $modal-background;
			border-radius: $base-border-radius;
			margin: auto;
			margin-top: 0;
			max-height: 100%;
			overflow: auto;
			padding: $modal-padding / 2;
			position: relative;
			// transition: opacity 0.25s ease;
			width: 95%;

			@include media($medium-screen) {
				// max-height: 100%;
				padding: $modal-padding;
				width: 50%;
			}

			@include media($large-screen) {
				width: 40%;
			}

			h1 {
				color: $base-font-color;
				text-align: left;
			}

			p {
				color: $base-font-color;
				line-height: $base-line-height;
			}

			.modal-intro {
				margin-bottom: 1em;
			}

			.modal-content {
				color: $base-font-color;

				@include media($medium-screen) {
					columns: 2 8em;
				}
			}

		}

		// .modal-state:checked + .modal-fade-screen {
		// 	opacity: 1;
		// 	visibility: visible;
		// }
		// .modal-fade-screen {
		// 	opacity: 1;
		// 	visibility: visible;
		// }

		// .modal-state:checked + .modal-fade-screen .modal-inner {
		// 	top: 0.5em;
		// }

		// .modal-fade-screen .modal-inner {
		// 	top: 0.5em;
		// }
	}

	// .modal-open {
	// 	overflow: hidden;
	// }
</style>

<script>
	export default {
        props: { form: String },
		methods: {
			close: function() {
				window.Event.$emit('modal-hide')
			}
		}
	}
</script>
