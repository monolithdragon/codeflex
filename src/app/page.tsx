import TerminalOverlay from '@/components/terminal-overlay';
import { Button } from '@/components/ui/button';
import UserPrograms from '@/components/user-programs';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
	return (
		<div className='flex min-h-screen flex-col text-foreground overflow-hidden'>
			<section className='relative z-10 py-24 flex-grow'>
				<div className='container mx-auto px-4'>
					<div className='grid grid-cols-1 gap-8 lg:grid-cols-12 items-center relative'>
						{/* Corner Decoration */}
						<div className='absolute -top-10 left-0 w-40 h-40 border-t-2 border-l-2' />

						{/* Left Side Content */}
						<div className='lg:col-span-7 space-y-8 relative'>
							<h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight'>
								<div>
									<span className='text-foreground'>Transform</span>
								</div>
								<div>
									<span className='text-primary'>Your Body</span>
								</div>
								<div className='pt-2'>
									<span className='text-foreground'>With Advance</span>
								</div>
								<div className='pt-2'>
									<span className='text-foreground'>AI</span>
									<span className='text-primary'> Technology</span>
								</div>
							</h1>

							{/* Seperator Line */}
							<div className='h-px w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-50' />

							<p className='text-xl text-muted-foreground w-2/3'>
								Talk to our AI assistant and get personalized dier plans and
								workout routines designed just for you.
							</p>

							{/* Stats */}
							<div className='flex items-center gap-10 py-6 font-mono'>
								<div className='flex flex-col'>
									<div className='text-2xl text-primary'>500+</div>
									<div className='text-xs uppercase tracking-wider'>
										Active Users
									</div>
								</div>
								<div className='h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent' />
								<div className='flex flex-col'>
									<div className='text-2xl text-primary'>3min</div>
									<div className='text-xs uppercase tracking-wider'>
										Generation
									</div>
								</div>
								<div className='h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent' />
								<div className='flex flex-col'>
									<div className='text-2xl text-primary'>100%</div>
									<div className='text-xs uppercase tracking-wider'>
										Personalized
									</div>
								</div>
							</div>

							{/* Call to Action */}
							<div className='flex flex-col md:flex-row gap-4 pt-6'>
								<Button
									asChild
									size='lg'
									className='bg-primary text-primary-foreground overflow-hidden px-8 py-6 text-lg font-medium'
								>
									<Link
										href='/generate-program'
										className='flex items-center font-mono'
									>
										Build Your Program
										<ArrowRightIcon className='ml-2' size={5} />
									</Link>
								</Button>
							</div>
						</div>

						{/* Right Side Content */}
						<div className='lg:col-span-5 relative'>
							{/* Corner Pieces */}
							<div className='absolute -inset-4 pointer-events-none'>
								<div className='absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-border' />
								<div className='absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-border' />
								<div className='absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-border' />
								<div className='absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-border' />
							</div>

							{/* Image Container */}
							<div className='relative aspect-square max-w-lg mx-auto'>
								<div className='relative overflow-hidden rounded-lg bg-cyber-black'>
									<img
										src='/hero-ai3.png'
										alt='AI Fitness Couch'
										className='size-full object-cover object-center'
									/>

									{/* Scan Line */}
									<div className='absolute inset-0 bg-[linear-gradient(transparent_0%,transparent_calc(50%-1px),var(--cyber-glow-primary)_50%,transparent_calc(50%+1px),transparent_100%)] bg-[length:100%_8px] animate-scanline pointer-events-none' />

									{/* Decoration On Top The Image */}
									<div className='absolute inset-0 pointer-events-none'>
										<div className='absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/40 rounded-full' />

										{/* Targeting Lines */}
										<div className='absolute top-1/2 left-0 w-1/4 h-px bg-primary/50' />
										<div className='absolute top-1/2 right-0 w-1/4 h-px bg-primary/50' />
										<div className='absolute top-0 left-1/2 w-px h-1/4 bg-primary/50' />
										<div className='absolute bottom-0 left-1/2 w-px h-1/4 bg-primary/50' />
										{/* New Targeting Line */}
										<div className='absolute top-1/4 left-1/4 w-1/2 h-px bg-primary/50' />
									</div>

									<div className='absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent' />
								</div>

								{/*Terminal Overlay */}
								<TerminalOverlay />
							</div>
						</div>
					</div>
				</div>
			</section>

			<UserPrograms />
		</div>
	);
};

export default HomePage;
