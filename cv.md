# 		This document is a "Markdown & Git" assignment for Rolling-Scopes-School courses.
* * *

## 	Junior Developer Resume.

*  ***Name, Surname:***
		Marat Gumerov.

*  ***Contact information:***
		- email:
			gumerovm74@gmail.com;
			gumerovm74work@gmail.com (reserve);
		- phone: +375 44 55 828 16;
		- adress: Gomel  Belarus; st Lenina ** - **  (the doorbell does not work);

*  ***Resume:***
	>My goal is to become a professional in web development.
	> To start, I want to become a	front end developer, and then for the back end.
	>I previously studied a different language (Java), but I always liked websites more.
	> I studied various free courses on the web, but now I have more practice.
	> Recently, I have been studying the language of Javascript and I really like it.

*  ***Skills***
	- programming language: javascript (basic);
	- platforms: IntelliJ IDEA; WebStorm; Atom; sublime text;
	- methodologies: Scrum + (asana);
	- version control: Git + (Github), Bitbucket + (Source-tree);

*  ***Code example:***
 >The code is part of a game in which smoke is created for an airplane.

* * *
    import * as PIXI from 'pixi.js';
    import {TweenLite} from 'gsap/TweenLite';


    export class SmokePlaneEffect extends PIXI.Container {
    constructor(plane) {
    super();

    this.sprite1 = PIXI.Sprite.from('assets/smokeAirplane/smokeAirplane@2x.png');
    this.sprite1.anchor.set(0.5);
    this.addChild(this.sprite1);

    this.sprite2 = PIXI.Sprite.from('assets/smokeAirplane/smokeAirplane@2x.png');
    this.sprite2.anchor.set(0.5);
    this.addChild(this.sprite2);

    this.sprite1.x = -plane.direction.x * 1.5;
    this.sprite1.y = -plane.direction.y * 1.5;

    this.sprite2.x = +plane.direction.x * 8;
    this.sprite2.y = +plane.direction.y * 8;

    this.alpha = 1;
    this.plane = plane;
    this.isActive = true;

    this.initTween();
    }

    initTween() {
		const delay = 0.7;
		this.tweens = [
		TweenLite.fromTo(this.sprite1.scale, 0.3, {
				'x': 0,
				'y': 0,
		}, {
				'x': 0.62,
				'y': 0.89,
		}),
		TweenLite.fromTo(this.sprite1, 0.1, {'alpha': 0}, {
				'alpha': 0.41,
				'ease': Power1.easeIn,
		}),
		TweenLite.fromTo(this.sprite1, 1.6, {'alpha': 0.41}, {
				'alpha': 0,
				'delay': 0.3,
		}),
		TweenLite.to(this.sprite1, 0, {'alpha': 0}),
		TweenLite.fromTo(this.sprite2.scale, 0.7, {
				'x': 0,
				'y': 0,
		}, {
				'x': 0.6,
				'y': 0.87,
				delay,
		}),
		TweenLite.fromTo(this.sprite2, 0.2, {'alpha': 0}, {
				'alpha': 0.4,
				'ease': Power1.easeIn,
		}),
		TweenLite.fromTo(this.sprite2, 1.4, {'alpha': 0.4}, {
				'alpha': 0,
				'ease': Power2.easeInOut,
				'delay': 0.5 + delay,
		}),
		TweenLite.to(this.sprite2, 0, {'alpha': 0}),
		TweenLite.to(this, 2, {
			'onComplete': () => {
			this.startOnce();
		},
		}),
		];
			for (const tween of this.tweens) {
				tween.pause(0);
			}
		}

		destroy() {
			this.sprite1.destroy();
			this.sprite2.destroy();

			for (const tween of this.tweens) {
				tween.kill();
			}

			super.destroy();
		}

		start() {
			this.isActive = true;
			this.startOnce();
		}

		startOnce() {
			if (this.isActive) {
			this.position = this.plane.getTailPosition();

			for (const tween of this.tweens) {
				tween.restart(true);
			}
			}
		}

		stop() {
			this.isActive = false;
			}
	}
* * *
*  ***experience:***

	- Web development: made up some simple sites;
	- js development: participated in the development of the game (wrote several classes, learned to work with frameworks);

*  ***education:***

	- courses: JavaRush (for Java); Epam.Trening.by( for Java);	Hexlet (for Java, JS); learn JS (book-coorse);
	- Htmlacademy (HTML/CSS/JS); codecademy (HTML/CSS); learn.javascript;
	- online learning: I have access to many video courses, books, and materials. At the moment, I have focused on studying at the RSS.  And also I decided to practice more in code than to gain theoretical knowledge.

*  ***English:***
>Previously, knowledge of English was at the level of school knowledge.
>He also lived in Egypt for 2 years, where he gained experience in spoken English.
>I am currently studying online courses for continuous improvement.
