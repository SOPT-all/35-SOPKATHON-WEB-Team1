import ResultFortune from '@/components/ResultPage/ResultFortune/ResultFortune';
import * as S from './ResultPage.style';
import Header from '@/components/common/Header/Header';
import { FortuneData } from '@/constants/fortuneData';
import EmojiList from '@/components/ResultPage/EmojiList/EmojiList.jsx';
import { emogiContainer } from './ResultPage.style';
import Button from '@/components/common/Button/Button.jsx';
import { IcHome } from '@/assets/svg/index.jsx';
import { useState } from 'react';

const ResultPage = () => {
	const fortuneData = FortuneData;
	const [isFeedback, setIsFeedback] = useState(false);

	const onSubmit = () => {
		if (!isFeedback) {
			setIsFeedback(true);
		}
	};

	return (
		<>
			<Header>이민규님의 운세 카드 대령이오 !</Header>

			<section css={S.cardContainer}>
				<ResultFortune data={fortuneData} />
			</section>
			<section css={S.emogiContainer}>
				<EmojiList />
				<Button
					variant={isFeedback ? 'thankyou' : 'feedback'}
					size='small'
					onClick={onSubmit}
				>
					{isFeedback ? '감사합니다' : '평가 제출하기'}
				</Button>
			</section>
			<section css={S.bottomButton}>
				<Button
					variant='primary'
					size='large'
					onClick={() => console.log('결과 공유하기')}
				>
					결과 공유하기
				</Button>
				<Button variant='togoHome' size='large' onClick={() => navigate('/')}>
					<IcHome />
					처음으로 돌아가기
				</Button>
			</section>
		</>
	);
};

export default ResultPage;
