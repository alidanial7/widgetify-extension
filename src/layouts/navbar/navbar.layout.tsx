import { useEffect, useState } from 'react'
import { VscSettings } from 'react-icons/vsc'
import { Colors } from '@/common/constant/colors.constant'
import { SettingModal } from '../setting/setting-modal'

export interface PageLink {
	name: string
	to: string
}

export function NavbarLayout(): JSX.Element {
	const [showSettings, setShowSettings] = useState(false)
	useEffect(() => {
		const handleOpenSettings = () => {
			setShowSettings(true)
		}

		window.addEventListener('openSettings', handleOpenSettings)

		return () => {
			window.removeEventListener('openSettings', handleOpenSettings)
		}
	}, [])

	return (
		<>
			<nav className="flex items-center justify-between px-4 pt-2">
				<div className="flex items-center">
					<h1 className="text-2xl text-gray-100">ویجتی‌فای</h1>
				</div>

				<button
					className={`flex items-center justify-center cursor-pointer w-10 h-10 text-gray-300 transition-all border shadow-lg rounded-xl hover:text-gray-400 ${Colors.bgItemGlass}`}
					onClick={() => setShowSettings(true)}
					aria-label="Settings"
				>
					<VscSettings size={22} />
				</button>
			</nav>
			<SettingModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
		</>
	)
}
