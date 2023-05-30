"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Victor Chandra, a Sophomore Student at School of Information Systems Bina Nusantara University, Indonesia.
						</p>
						<p>
							During my university years, I learn and exploring my passion in web and mobile design
							consistently engaged in creating new concepts and techniques in this field.
						</p>
						<p>So, my desiging journey began in 2020 as aUI/UX Designer.</p>
						<p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working and learning UI Design in Figma.
						</p>
						<p>
							Based on the experienced, I&lsquo;m plan to launch NasPas Studio. A local UI/UX design
							studio for solving user&lsquo;s needs.
						</p>
						<p className="my-3.5">
							As the design journey grows, in 2023 I start to learn Swift, a programming language for
							iOS. Swift and SwiftUI give me motivation to apply for WWDC23 SwiftStudentChallenge. 
							Well this year still not accepted, but WWDC24 will be the year I got accepted.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
