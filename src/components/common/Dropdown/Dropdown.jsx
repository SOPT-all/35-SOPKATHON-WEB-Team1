import { IcArrowDown, IcArrowUp } from '@/assets/svg';
import * as S from '@/components/common/Dropdown/Dropdown.style';

const Dropdown = ({
	options = [],
	label,
	isOpen,
	setIsOpen,
	isDisabled,
	onTrigger,
	selectedValue,
	placeholder,
	onSelect,
}) => {
	return (
		<div>
			<label id={label} css={S.label}>
				{label}
			</label>
			<div css={S.wrapper(isDisabled)}>
				{selectedValue || placeholder}
				<button onClick={onTrigger} css={S.svg}>
					{isOpen ? (
						<IcArrowUp width={16} height={16} css={S.svg} />
					) : (
						<IcArrowDown width={16} height={16} css={S.svg} />
					)}
				</button>
				{isOpen && (
					<ul css={S.itemList}>
						{options.map((option, index) => (
							<li
								key={index}
								value={option}
								css={S.item}
								tabIndex={0}
								onClick={() => {
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
		</div>
	);
};

export default Dropdown;