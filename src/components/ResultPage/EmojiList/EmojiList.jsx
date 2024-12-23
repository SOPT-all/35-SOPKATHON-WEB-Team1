import { useState } from 'react';
import * as S from './EmojiList.style';
import {
	IcExpressionlessFace,
	IcGrinningFace,
	IcSadFace,
	IcSmilingFace,
} from '@/assets/svg';

const EmojiList = ({ onEmojiClick, disabled }) => {
	const [selectedEmoji, setSelectedEmoji] = useState(null);

	const handleEmojiClick = (emojiId) => {
		if (!disabled) {
			setSelectedEmoji(emojiId);
			onEmojiClick();
		}
	};

	const emojis = [
		{ id: 1, Component: IcGrinningFace },
		{ id: 2, Component: IcSmilingFace },
		{ id: 3, Component: IcExpressionlessFace },
		{ id: 4, Component: IcSadFace },
	];

	return (
		<ul css={S.List}>
			{emojis.map(({ id, Component }) => (
				<li
					key={id}
					css={S.ListItem(selectedEmoji === id)}
					onClick={() => handleEmojiClick(id)}
				>
					<Component width={32} height={32} />
				</li>
			))}
		</ul>
	);
};

export default EmojiList;
