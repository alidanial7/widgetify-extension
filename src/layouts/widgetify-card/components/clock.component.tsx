import { useTheme } from '@/context/theme.context'
import { getCurrentDate } from '@/layouts/calendar/utils'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const ClockComponent = () => {
	const [time, setTime] = useState(getCurrentDate())
	const { themeUtils } = useTheme()

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(getCurrentDate())
		}, 1000)
		return () => clearInterval(timer)
	}, [])

	const isDayTime = time.hour() >= 6 && time.hour() < 18
	const bgGradient = isDayTime ? '☀️' : '🌙'

	return (
		<motion.div
			className="p-2"
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div
				className={`text-xs font-extrabold tracking-wide ${themeUtils.getTextColor()} drop-shadow-lg`}
			>
				{bgGradient} {time.format('HH:mm')}
			</div>
		</motion.div>
	)
}

export default ClockComponent
