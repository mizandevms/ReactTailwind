import {gsap} from "gsap"
import React, {useEffect, useRef} from "react"

export default function Animation() {
	const boxRef = useRef()

	useEffect(() => {
		gsap.fromTo(
			boxRef.current,
			{
				x: 100,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
			}
		)
	})
	return (
		<div className='max-w-4xl mx-auto py-12 h-[50rem]'>
			<p p className='text-center text-3xl font-extrabold text-cyan-700 space-y-4 flex flex-col ' ref={boxRef}>
				<span className='border border-gray-200 shadow-md p-4 rounded-md'>Hello Listener,</span>
				<span className='border border-gray-200 shadow-md p-4 rounded-md'>Welcome Here</span>
			</p>
		</div>
	)
}
