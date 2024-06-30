import { Button, Htag, P } from '@/components';

export default function Home() {
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary'>Primary</Button>
			<Button appearance='ghost' arrow='right'>
				Ghost
			</Button>
			<P>
				Студенты освоят не только hard skills, необходимые для работы
				веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
				взаимодействовать в команде с менеджерами, разработчиками и
				маркетологами. Выпускники факультета могут успешно конкурировать с
				веб-дизайнерами уровня middle.
			</P>
		</>
	);
}
