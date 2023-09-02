import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function Editor({ value, onChange }) {
	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[{ font: [] }],

			[{ color: [] }, { background: [] }], // dropdown with defaults from theme

			['bold', 'italic', 'underline', 'strike'], // toggled buttons
			['blockquote', 'code-block'],

			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
			[{ indent: '-1' }, { indent: '+1' }], // outdent/indent

			[{ align: [] }],

			[{ link: 'link' }, { image: 'image' }],

			['clean'], // remove formatting button
		],
	}

	return (
		<div className='content'>
			<ReactQuill
				theme={'snow'}
				modules={modules}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}
