import { IcArrowDown, IcArrowUp } from '@/assets/svg';
import * as S from '@/components/common/Dropdown/Dropdown.style';

const Dropdown = ({
	options = [],
	isOpen,
	setIsOpen,
	isDisabled,
	onTrigger,
	selectedValue,
	placeholder,
	onSelect,
}) => {
	return (
		<div css={S.wrapper(isDisabled)} onClick={onTrigger}>
			{selectedValue || placeholder}
			<button onClick={onTrigger}>
				{!isDisabled && isOpen ? (
					<IcArrowUp width={16} height={16} />
				) : (
					<IcArrowDown width={16} height={16} />
				)}
			</button>
			{!isDisabled && isOpen && (
				<ul css={S.itemList}>
					{options.map((option, index) => (
						<li
							key={index}
							value={option}
							css={S.item}
							tabIndex={0}
							onClick={(e) => {
								e.stopPropagation();
								onSelect?.(option);
								setIsOpen(false);
							}}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
