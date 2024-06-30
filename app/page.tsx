import { Button, Htag, P, Tag } from '@/components';

export default function Home() {
	return (
		<>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance='primary'>Primary</Button>
			<Button appearance='ghost' arrow='right'>
				Ghost
			</Button>
			<P size='big'>
				Студенты освоят не только hard skills, необходимые для работы
				веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
				взаимодействовать в команде с менеджерами, разработчиками и
				маркетологами. Выпускники факультета могут успешно конкурировать с
				веб-дизайнерами уровня middle.
			</P>
			<P size='small'>
				Студенты освоят не только hard skills, необходимые для работы
				веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
				взаимодействовать в команде с менеджерами, разработчиками и
				маркетологами. Выпускники факультета могут успешно конкурировать с
				веб-дизайнерами уровня middle.
			</P>
			<Tag color='red'>red</Tag>
			<Tag color='green'>green</Tag>
			<Tag color='grey'>grey</Tag>
			<Tag color='primary'>primary</Tag>
		</>
	);
}
