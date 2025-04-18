const TerminalOverlay = () => {
	return (
		<div className='absolute bottom-0 left-0 right-0 p-4'>
			<div className='relative bg-cyber-terminal-bg backdrop-blur-sm border border-border rounded-lg p-3 overflow-hidden font-mono'>
				{/* Status Bar */}
				<div className='flex items-center justify-between mb-2 border-b border-border pb-1'>
					<div className='flex items-center gap-2'>
						<div className='w-2 h-2 bg-primary rounded-full animate-pulse' />
						<p className='text-xs text-primary uppercase'>System Active</p>
					</div>
					<p className='text-xs text-muted-foreground'>ID:78412.93</p>
				</div>

				<p className='text-sm text-foreground mb-2 tracking-tight uppercase'>
					<span className='text-primary'>/</span> Workout Analisys Complete
				</p>

				<div className='space-y-1.5 text-xs text-muted-foreground'>
					<div className='flex items-center'>
						<div className='text-primary mr-2'>01</div>
						<span>30 min strength training (upper body)</span>
					</div>
					<div className='flex items-center'>
						<div className='text-primary mr-2'>02</div>
						<span>20 min cardio (moderate intensity)</span>
					</div>
					<div className='flex items-center'>
						<div className='text-primary mr-2'>03</div>
						<span>10 min flexibility (recovery)</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TerminalOverlay;
