import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Mail, Smartphone } from 'lucide-react';

const cofounders = [
	{
		id: 1,
		name: 'Sai Karthik',
		role: 'Co-Founder',
		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
		rating: 5,
		email: ' karthik30903@gmail.com',
		phone: '+91 8008085533',
	},
	{
		id: 2,
		name: 'P.Jogeeswara V.N.S',
		role: 'Co-Founder',
		avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
		rating: 5,
		email: 'jogeeswarapuvvala@gmail.com',
		phone: '+91 9063316737',
	},
];

const Testimonials = () => {
	return (
		<div className="w-full min-h-screen bg-[#110F15] py-20 px-4 sm:px-10">
			{/* Section Title */}
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-4xl font-bold text-white text-center mb-12"
			>
				Our <span className="text-[#9b5de5]">Founders</span>
			</motion.h2>

			{/* Founders Grid */}
			<div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 px-4">
				{cofounders.map(
					({ id, name, role, content, avatar, rating, email, phone }) => (
						<motion.div
							key={id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: id * 0.2 }}
							className="relative rounded-2xl p-10 bg-[#181924] border border-[#1f1f2e] shadow-lg hover:border-[#9b5de5] hover:shadow-[0_0_15px_#9b5de5] transition-all duration-300"
						>
							{/* Decorative blurred circles */}
							<div className="absolute top-5 right-5 w-24 h-24 rounded-full bg-[#9b5de5] opacity-10 filter blur-xl pointer-events-none"></div>
							<div className="absolute bottom-6 left-6 w-28 h-28 rounded-full bg-[#9b5de5] opacity-5 filter blur-2xl pointer-events-none"></div>
							{/* Quote Icon */}
							<Quote
								size={36}
								className="absolute top-5 left-5 text-[#9b5de5] opacity-20 pointer-events-none"
							/>

							{/* Founder Info */}
							<div className="flex flex-col items-center text-center relative z-10">
								{/* Avatar with solid violet border and background */}
								<div className="w-24 h-24 mb-6 rounded-full p-1 bg-[#181924] flex items-center justify-center">
									<span className="w-full h-full flex items-center justify-center rounded-full bg-[#181924] text-5xl font-bold text-[#9b5de5] border-4 border-[#9b5de5]">
										{name[0]}
									</span>
								</div>

								{/* Name & Role */}
								<h3 className="text-2xl font-bold text-white">{name}</h3>
								<p className="text-[#9b5de5] font-medium mb-3">{role}</p>

								{/* Contact Info */}
								<div className="flex flex-col gap-2 mb-4 text-gray-300 text-sm">
									<div className="flex items-center justify-center space-x-2">
										<Mail size={16} className="text-[#9b5de5]" />
										<a
											href={`mailto:${email}`}
											className="hover:text-[#f15bb5] transition-colors"
										>
											{email}
										</a>
									</div>
									<div className="flex items-center justify-center space-x-2">
										<Smartphone size={16} className="text-[#9b5de5]" />
										<a
											href={`tel:${phone.replace(/\s+/g, '')}`}
											className="hover:text-[#f15bb5] transition-colors"
										>
											{phone}
										</a>
									</div>
								</div>

								{/* Star Rating */}
								{/* Removed stars */}

								{/* Testimonial */}
								<blockquote className="max-w-md italic leading-relaxed text-gray-300">
									{content}
								</blockquote>
							</div>
						</motion.div>
					)
				)}
			</div>
		</div>
	);
};

export default Testimonials;
