import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';
import { defaultTitle, author } from 'data/config';
import github_icon from 'assets/icons/github.svg';
import stackoverflow_icon from 'assets/icons/stackoverflow.svg';
import twitter_icon from 'assets/icons/twitter.svg';

//work around to fix broken image links, we map the assets as a lookup
const icons = {
	github: github_icon,
	stackoverflow: stackoverflow_icon,
	twitter: twitter_icon,
};

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>{defaultTitle}</h2>
				<span>
					© All rights are reserved | {new Date().getFullYear()} | Made with{' '}
					<span aria-label="love" role="img">
						💖
					</span>{' '}
					by{' '}
					<a
						href="https://www.iantsmall.com/?ref=portfolio-dev"
						rel="noopener noreferrer"
						target="_blank"
					>
						{author}
					</a>
				</span>
			</Details>
			<Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${name}`}
					>
						<img width="24" src={icons[icon]} alt={name} />
					</a>
				))}
			</Links>
		</Flex>
	</Wrapper>
);
