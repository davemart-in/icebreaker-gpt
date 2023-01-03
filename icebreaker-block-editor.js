const { __ } = wp.i18n;

wp.blocks.registerBlockType( 'a8c/icebreaker', {
	title: 'Icebreaker',
	icon: 'megaphone',
	category: 'common',
	attributes: {
		question: {
			type: 'string'
		},
		questionFontSize: {
			type: 'number'
		}
	},
	edit: function( props ) {
		var question = props.attributes.question;
		if (!question) {
			question = icebreakerBlockRender();
			props.setAttributes({ question: question });
		}
		function updateQuestion() {
			props.setAttributes( { question: icebreakerBlockRender() } );
		}
		return wp.element.createElement(
			'div',
			{},
			wp.element.createElement(
				wp.editor.InspectorControls,
				{},
				wp.element.createElement(
					wp.components.PanelBody,
					{
						title: __( 'Icebreaker Settings' ),
						initialOpen: true,
					},
					wp.element.createElement(
						wp.components.FontSizePicker,
						{
							fontSizes: [
								{
									name: 'small',
									shortName: 'S',
									size: 14,
								},
								{
									name: 'regular',
									shortName: 'M',
									size: 16,
								},
								{
									name: 'large',
									shortName: 'L',
									size: 20,
								},
								{
									name: 'extra large',
									shortName: 'XL',
									size: 24,
								},
							],
							value: props.attributes.questionFontSize || 16,
							onChange: ( value ) => {
								props.setAttributes( { questionFontSize: value } );
							},
						}
					)
				)
			),
			wp.element.createElement(
				'p',
				{ className: 'icebreaker-question' },
				wp.element.createElement(
					'span',
					{ style: { fontSize: props.attributes.questionFontSize || 16 } },
					question
				),
				wp.element.createElement(
					'a',
					{ onClick: updateQuestion, href: '#', className: 'refresh-icon' },
					wp.element.createElement(
						'span',
						{ },
						'🔄'
					)
				)
			),
		);
	},
	save: function( props ) {
		return wp.element.createElement(
			'p',
			{ style: { fontSize: `${props.attributes.questionFontSize}px` } },
			props.attributes.question
		);
	}
} );

const icebreakerBlockRender = () => {
	const questions = [
		__('If you could have dinner with any historical figure, who would it be and why?'),
		__('What is the best vacation you have ever taken?'),
		__('If you could learn any new skill in an instant, what would it be?'),
		__('What was the last book you read and would you recommend it?'),
		__('If you could live in any fictional world, where would you choose?'),
		__('What is your favorite hobby and why?'),
		__('If you could have any superpower, what would it be and why?'),
		__('What was the last adventure you went on?'),
		__('If you could go back in time to any point in history, where and when would you go?'),
		__('What is something you have always wanted to learn how to do?'),
		__('If you could live in any city in the world, where would you choose?'),
		__('If you could have any job in the world, what would it be and why?'),
		__('What was the last thing that made you laugh out loud?'),
		__('If you could only eat one type of food for the rest of your life, what would it be?'),
		__('What is your favorite thing about yourself?'),
		__('What was the last concert you went to?'),
		__('If you could have any animal as a pet, what would it be and why?'),
		__('If you could travel anywhere in the world, where would you go?'),
		__('If you could only watch one movie for the rest of your life, what would it be?'),
		__('What is the most interesting thing you have learned recently?'),
		__('If you could meet any celebrity, who would it be and why?'),
		__('If you could have any talent, what would it be and why?'),
		__('What was the last thing you baked or cooked?'),
		__('If you could live in any period of history, what would it be and why?'),
		__('What is your favorite quote or motto?'),
		__('If you could have any superpower, what would it be and why?'),
		__('What is your favorite thing about your job?'),
		__('If you could learn any language fluently, which one would you choose?'),
		__('What was the last thing you painted or drew?')
	];
	const randomIndex = Math.floor(Math.random() * questions.length);
	return questions[randomIndex];
}