import React, { useState } from 'react';

export default function App() {
	
	const questions = [
		{
			questionText: 'I 2019 var det om lag 200 000 direkte og indirekte sysselsatte i petroleumssektroen i Norge. Hvor mange syssesatte estimerer forskningsinstituttet Sintef at en norsk havvind-satsing kan gi i 2050?',
			answerOptions: [
				{ answerText: '50 000 sysselsatte', isCorrect: true },
				{ answerText: '200 000 sysselsatte', isCorrect: false },
				{ answerText: '300 000 sysselsatte', isCorrect: false },
			],
		},
		{
			questionText: 'I 2020 eksporterte Norge for 325,2 milliarder av norsk olje og gass som er 42,2% av norges totale eksport i 2020. Hvor mye eksporterte vi av havvind-teknologi i 2020 i følge Sintef?',
			answerOptions: [
				{ answerText: '0,5 mrd', isCorrect: false },
				{ answerText: '5 mrd', isCorrect: false },
				{ answerText: '15 mrd', isCorrect: true },
			],
		},
		{
			questionText: 'Hvor mye stadfester NHO-rapporten “Grønne elektriske verdikjeder” at en norsk havvind-satsing potensielt kan generere av eksportinntekter i 2050?',
			answerOptions: [
				{ answerText: '40 mrd', isCorrect: false },
				{ answerText: '110 mrd', isCorrect: true },
				{ answerText: '360 mrd', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Du fikk {score} ut av {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Spørsmål {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
