import React from 'react'
import { Link } from 'react-router-dom'

export default function Post() {
	return (
		<div className='post'>
			<div className='image'>
				<img
					src='https://duet-cdn.vox-cdn.com/thumbor/0x0:2074x1113/1080x720/filters:focal(1037x557:1038x558):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24830473/CleanShot_2023_08_04_at_13.32.24.png'
					alt=''
				/>
			</div>
			<div className='texts'>
				<h2>Shooter game is the most fun</h2>
				<p className='info'>
					<Link className='author'>Brian Gerdes</Link>
					<time>2023-08-05 14:45</time>
				</p>
				<p className='summary'>
					That eight-year-old is demonstrably better than you at the game but is
					currently being forced to talk to his mom and isn’t really paying
					attention.
				</p>
			</div>
		</div>
	)
}
