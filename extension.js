// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Theopse (Self@theopse.org)
// Licensed under BSD-2-Caluse
// File: extension.js (rExtension/星河灿烂/extension.js)
// Content:  
// Copyright (c) 2022 Theopse Organization All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

game.import("extension", (lib, game, ui, get, ai, _status) => {
	let extInfo = {
		intro: "夜色斑斓，星河璀璨",
		version: "0.0.0",
		branch: "Development",
		build: 7,
		Year: 2022,
		Month: "05",
		Date: 13,
		nextPreview: 9,
		times: "001",
	};

	return {
		name: "星河灿烂",
		editable: false,
		content: (config, _pack) => {
			// Load Extension
			lib.arenaReady.push(() => {
				// lib.extensionPack["reHeart"]
				let translate = "星河灿烂";
				let extension = "Star";
				let type = "rExtension";

				let intro2 = [
					"<span style=\"color:#1688F2\">Author: Rintim",
					`Version: ${["Release", "Preview"].includes(extInfo.branch) ?
						(extInfo.branch === "Release" ? extInfo.version : `${extInfo.version}pre`)
						: (extInfo.branch === "Development" ?
							`Build ${extInfo.year}.${extInfo.month}.${extInfo.date}.${extInfo.times}`
							: `Build ${extInfo.build}${extInfo.nextPreview === null ? "" : ` Form ${extInfo.nextPreview}`}`)
					}`,
					"本扩展目前为测试阶段，欢迎反馈BUG</span>",
					"- - - - - - - - - - - - - - - - - - - - - - - - -",
					"●仓库地址: ",
					"- Gitlab:/Rintim/rintim-extension-star",
					"●前置需求: ",
					"- reHeart",
					"- StandardLib",
					""
				]
				if (extInfo.branch === "Development") {
					intro2.addArray([
						"●注意: <span style=\"color:#FF3333\">你目前在使用Development分支",
						"该分支下可能会出现BUG，请确认需求使用</span>",
						""
					])
				}
				// Set Update Strings
				{
					lib.extensionPack[translate].version = extInfo.version;
					let strings = [
						"</li>",
						"注意：",
						"本扩展目前处于测试阶段，可能会有一些未知BUG",
						"如发现BUG，希望能及时反馈"
					];
					game.showExtensionChangeLog(strings.join("</br>"), translate);
				}
				// Set Menu
				{
					let _delete = lib.extensionMenu[`extension_${translate}`].delete;

					delete lib.extensionMenu[`extension_${translate}`].delete;

					delete lib.extensionMenu[`extension_${translate}`].author;

					lib.extensionMenu[`extension_${translate}`].des = {
						name: `<div class="${type}_${extension}">扩展介绍<font size="5px" color="gold">⇨</font></div>`,
						clear: true,
						onclick: function () {
							if (this[`${type}_${extension}_Intro_Click`] === undefined) {
								let more = ui.create.div(`.${type}_${extension}_Click`, [
									"<div style=\"border: 1px solid gray\"><font size=2px>本扩展将对官方武将进行重塑，打造出更符合历史人设的武将",
									"本扩展重在设计，如有好的设计也欢迎提供</font></div>"
								].join("</br>"))
								this.parentNode.insertBefore(more, this.nextSibling);
								this[`${type}_${extension}_Intro_Click`] = more;
								this.innerHTML = `<div class="${type}_${extension}">扩展介绍<font size="5px">⇩</font></div>`;
							} else {
								this.parentNode.removeChild(this[`${type}_${extension}_Intro_Click`]);
								delete this[`${type}_${extension}_Intro_Click`];
								this.innerHTML = `<div class="${type}_${extension}">扩展介绍<font size="5px">⇨</font></div>`;
							};
						}
					}

					lib.extensionMenu[`extension_${translate}`].intro2 = {
						name: intro2.join("</br>"),
						clear: true,
						nopointer: true,
					}

					lib.extensionMenu[`extension_${translate}`].changeLog = {
						name: `<div class="${type}_${extension}">更新日志<font size="5px" color="gold">⇨</font></div>`,
						clear: true,
						onclick: function () {
							if (this[`${type}_${extension}_Log_Click`] === undefined) {
								let more = ui.create.div(`.${type}_${extension}_Click`, [
									"<div style=\"border: 1px solid gray\"><font size=2px>None(</font></div>"
								].join("</br>"))
								this.parentNode.insertBefore(more, this.nextSibling);
								this[`${type}_${extension}_Log_Click`] = more;
								this.innerHTML = `<div class="${type}_${extension}">更新日志<font size="5px">⇩</font></div>`;
							} else {
								this.parentNode.removeChild(this[`${type}_${extension}_Log_Click`]);
								delete this[`${type}_${extension}_Log_Click`];
								this.innerHTML = `<div class="${type}_${extension}">更新日志<font size="5px">⇨</font></div>`;
							};
						}
					}

					lib.extensionMenu[`extension_${translate}`]["config_title"] = {
						"name": "<p align=center><span style=\"font-size:18px\">- - - - - - - 武将设置 - - - - - - -</span>",
						"clear": true,
						"nopointer": true
					};

					lib.extensionMenu[`extension_${translate}`]["character_enable"] = {
						name: "武将启用",
						intro: "开启此功能后重启生效。启用扩展包中的武将。",
						init: true,
					};

					lib.extensionMenu[`extension_${translate}`]["dynamic_enable"] = {
						name: "使用动态皮肤",
						intro: "开启此功能后重启生效。使用武将的动态皮肤，部分武将无动态皮肤（请自行注意开销）。",
						init: false,
					};

					lib.extensionMenu[`extension_${translate}`]["colour_enable"] = {
						name: "使用彩色描述",
						intro: "（WIP）开启此功能后重启生效。使用彩色描述，高亮重点标识",
						init: false,
					};

					lib.extensionMenu[`extension_${translate}`]["Last BR"] = {
						"name": "</br>",
						"clear": true,
						"nopointer": true
					};

					lib.extensionMenu[`extension_${translate}`].delete = _delete;
				}
				// Check Dependence
				{
					let bool = true;
					let abort = [];
					if (!lib.storage["reHeart"]) {
						bool = false;
						abort.push("reHeart");
					}
					if (!lib.storage["rExtension_StandardLib"]) {
						bool = false;
						abort.push("StandardLib");
					}

					if (!bool) {
						alert("星河灿烂: 扩展读取错误！\n缺少前置: " + abort);
						/* lib.extensionPack[name].intro */ lib.extensionMenu[`extension_${translate}`].intro.name = `<span style=\"color:#FF3333\">缺少前置: ${abort.join(",")}</br>扩展停止读取</span></br></br>${intro}`;
						return;
					}
				}
				// Add Skill
				if (config.character_enable) {
					let skills = {
						"rExtension_Star_Skill_guojia_tiandu": {
							name: "天妒",
							des: "锁定技，回合结束时。若你本回合于摸牌阶段外摸的牌数大于你的体力上限，你失去一点体力。",
							desColour: "<b>锁定技，</b>回合结束时。若你本回合于摸牌阶段外摸的牌数大于你的体力上限，你失去一点体力。",
							content: {
								audio: ["tiandu", `ext:${translate}/audio/skill:2`],
								init: (player, skill) => {
									if (!player.node.count) player.node.count = {};
									player.node.count[skill] = 0;
								},
								trigger: {
									player: "phaseEnd",
								},
								filter: (_event, player) => player.node.count["rExtension_Star_Skill_guojia_tiandu"] > player.maxHp,
								forced: true,
								content: () => {
									player.loseHp();
								},
								group: ["rExtension_Star_Skill_guojia_tiandu_refresh", "rExtension_Star_Skill_guojia_tiandu_add"],
								subSkill: {
									refresh: {
										trigger: {
											player: "phaseBegin",
										},
										silent: true,
										charlotte: true,
										content: () => {
											player.node.count["rExtension_Star_Skill_guojia_tiandu"] = 0;
										},
										sub: true
									},
									add: {
										trigger: {
											player: "drawAfter",
										},
										silent: true,
										charlotte: true,
										filter: (event, player) => {
											if (event.getParent().name === "phaseDraw") return false;
											return event.num && player.node.count["rExtension_Star_Skill_guojia_tiandu"] !== undefined;
										},
										content: () => {
											player.node.count["rExtension_Star_Skill_guojia_tiandu"] += trigger.num;
										},
										sub: true
									}
								}
							},
						},
						"rExtension_Star_Skill_guojia_dongxi": {
							name: "洞悉",
							des: "出牌阶段限一次，你可以观看一名其他角色的手牌；当你即将被其他角色获得或弃置而失去牌时，你可改为自己选择失去的牌。",
							desColour: "出牌阶段限一次，你可以观看一名其他角色的手牌；当你即将被其他角色获得或弃置而失去牌时，你可改为自己选择失去的牌。",
							content: {
								audio: ["dongxi", `ext:${translate}/audio/skill:2`],
								group: ["rExtension_Star_Skill_guojia_dongxi_visual", "rExtension_Star_Skill_guojia_dongxi_wanwei"]
							}
						},
						"rExtension_Star_Skill_guojia_dongxi_visual": {
							name: "洞悉",
							des: "出牌阶段限一次，你可以观看一名其他角色的手牌。",
							desColour: "出牌阶段限一次，你可以观看一名其他角色的手牌。",
							content: {
								audio: ["dongxi", `ext:${translate}/audio/skill:2`],
								enable: "phaseUse",
								usable: 1,
								filter: (_event, player) => game.players.filter(current => current !== player && current.hasCards("h")).length,
								filterTarget: (_card, player, target) => player !== target && target.hasCards("h"),
								selectTarget: 1,
								content: () => {
									"step 0"
									game.log(player, "观看了", target, "的牌");
									player.chooseControl("ok").set("dialog", ["洞悉", target.getCards("h")]);
									event.finish();
									"step 1"
									// let cards = target.getCards("h", card => !card.hasGaintag("visualCard"));
									// if (cards.length === 1) event._result = {bool: true, cards: cards};
									// else if (cards.length > 1) player.choosePlayerCard(target, "h", 1, `洞悉: 明示${get.translation(target)}一张牌`, "visible", true).set("onlyUnVisualed", true);
									"step 2"
									// if (result.bool && result.cards && result.cards.length) {
									//	 target.addGaintag(result.cards, "visualCard");
									//	 target.showCards(result.cards);
									// }
								}
							}
						},
						"rExtension_Star_Skill_guojia_dongxi_wanwei": {
							name: "洞悉",
							des: "当你即将被其他角色获得或弃置而失去牌时，你可改为自己选择失去的牌。",
							desColour: "当你即将被其他角色获得或弃置而失去牌时，你可改为自己选择失去的牌。",
							content: {
								audio: ["dongxi", `ext:${translate}/audio/skill:2`],
								trigger: {
									target: ["rewriteGainResult", "rewriteDiscardResult"]
								},
								direct: true,
								preHidden: true,
								filter: (event, player) => {
									return event.player !== player;
								},
								audio: 2,
								content: () => {
									"step 0"
									var prompt = `即将失去${get.translation(trigger.result.cards)}是否发动【洞悉】？`;
									var next = player.choosePlayerCard(player, prompt, trigger.position);
									next.set("ai", function (button) {
										return 20 - get.value(button.link);
									});
									next.filterButton = trigger.filterButton;
									next.selectButton = trigger.result.cards.length;
									next.setHiddenSkill("rExtension_Star_Skill_guojia_dongxi");
									"step 1"
									if (result.bool) {
										player.logSkill("rExtension_Star_Skill_guojia_dongxi");
										trigger.result.cards = result.links.slice(0);
										trigger.result.links = result.links.slice(0);
										trigger.cards = result.links.slice(0);
										trigger.untrigger();
									}
								}
							}
						},
						"rExtension_Star_Skill_guojia_dingliao": {
							name: "定辽",
							des: "出牌阶段，你可将一张牌交给一名其他角色（不能弃置相同类型的牌且不能指定相同的角色）；若如此做，其视为对你指定的另一名角色使用一张普通锦囊牌并与你各摸一张牌。",
							desColour: "出牌阶段，你可将一张牌交给一名其他角色（不能弃置相同类型的牌且不能指定相同的角色）；若如此做，其视为对你指定的另一名角色使用一张普通锦囊牌并与你各摸一张牌。",
							content: {
								init: (player, skill) => {
									if (!player.node.count) player.node.count = {};
									player.node.count[skill] = {
										target: [],
										cards: [],
									};
								},
								group: "rExtension_Star_Skill_guojia_dingliao_refresh",
								audio: ["dingliao", `ext:${translate}/audio/skill:2`],
								enable: "phaseUse",
								// usable: 1,
								position: "he",
								filterCard: (card, player, _target) => !player.node.count["rExtension_Star_Skill_guojia_dingliao"].cards.includes(get.type(card, "trick")),
								filter: (_event, player) => player.hasCards("he", card => !player.node.count["rExtension_Star_Skill_guojia_dingliao"].cards.includes(get.type(card, "trick"))),
								check: card => 8 - get.value(card),
								selectTarget: 2,
								multitarget: true,
								discard: false,
								lose: false,
								targetprompt: ["得到牌", "目标"],
								filterTarget: (_card, player, target) => ui.selected.targets.length == 0 ? (player !== target && !player.node.count["rExtension_Star_Skill_guojia_dingliao"].target.includes(target)) : ui.selected.targets[0] !== target,
								delay: false,
								content: () => {
									"step 0"
									// 直接写cards会报错，原因未知
									player.node.count["rExtension_Star_Skill_guojia_dingliao"].target.push(targets[0]);
									player.node.count["rExtension_Star_Skill_guojia_dingliao"].cards.push(get.type(event.cards[0], "trick"));
									targets[0].gain(event.cards, player, "give");
									"step 1"
									let cards = lib.inpile.filter(card => get.type(card) === "trick" && lib.filter.filterTarget({ name: card, isCard: true }, targets[0], targets[1]));
									if (!cards.length) event.goto(3);
									else {
										cards = cards.map(name => ["锦囊", "", name]);
										targets[0].chooseButton([get.translation(event.name), [cards, "vcard"]], true).set("ai", button => button.link[2] === _status.event.choice? 1 : 0);
									}
									"step 2"
									if (result.bool) {
										let card = { name: result.links[0][2] };
										let next = targets[0].useCard(card, targets[1]);
										next.cards = event.cards;
									}
									"step 3"
									game.asyncDraw([player, targets[0]]);
								},
								ai: {
									result: {
										player: (player) => {
											var players = game.filterPlayer();
											for (var i = 0; i < players.length; i++) {
												if (players[i] != player && get.attitude(player, players[i]) > 1 && get.attitude(players[i], player) > 1) {
													return 1;
												}
											}
											return 0;
										},
										target: (_player, _target) => ui.selected.targets.length ? -0.1 : 1
									},
									order: 8.5,
									expose: 0.2
								},
								subSkill: {
									refresh: {
										trigger: {
											player: "phaseBegin",
										},
										silent: true,
										charlotte: true,
										content: () => {
											player.node.count["rExtension_Star_Skill_guojia_dingliao"] = {
												target: [],
												cards: [],
											};
										},
										sub: true
									}
								}
							}
						}
					}

					for (let skill in skills) {
						let { name, des, desColour, content } = skills[skill];
						if (content) {
							lib.skill[skill] = content;
							if (name) lib.translate[skill] = name;
							if (des || desColour) lib.translate[`${skill}_info`] = config.colour_enable ? (desColour ? desColour : des) : des;
						}
					}

					if (!lib.skill["_doublegroup_choice"]) lib.skill["_doublegroup_choice"] = {
						trigger: {
							global: "gameStart",
							player: "enterGame",
						},
						forced: true,
						charlotte: true,
						firstDo: true,
						popup: false,
						filter: function (event, player) {
							return get.mode() != "guozhan" && get.is.double(player.name1) && !player._groupChosen;
						},
						content: function () {
							"step 0"
							player._groupChosen = true;
							player.chooseControl(get.is.double(player.name1, true)).set("prompt", "请选择你的势力");
							"step 1"
							player.changeGroup(result.control);
						},
					}
				}
				// Add Character
				if (config.character_enable) {
					let dot = config.dynamic_enable ? ".gif" : ".png";
					let characters = {
						"rExtension_Star_Character_Skealous_guojia": {
							sex: "male",
							group: "wei",
							hp: 3,
							replace: "guojia",
							maxHp: 3,
							rank: { rarity: "epic" },
							translate: "郭嘉",
							skills: ["rExtension_Star_Skill_guojia_tiandu", "rExtension_Star_Skill_guojia_dongxi", "rExtension_Star_Skill_guojia_dingliao"],
							tags: [
								`ext:${translate}/image/character/guojia${dot}`,
								`died:ext:${translate}/audio/die/guojia.mp3`,
								"forbidai"
							],
							des: "字奉孝，颍川阳翟人，官至军师祭酒。惜天妒英才，英年早逝。有诗云：“良计环环不遗策，每临制变满座惊”",
							catelogy: "Skealous"
						},
					};

					lib.characterPack[`mode_extension_${type}_${extension}`] = {};

					for (let name in characters) {
						let info = characters[name]
						let showHp;
						if (!info.maxHp || info.maxHp == info.hp) showHp = info.hp;
						else showHp = `${info.hp}/${info.maxHp}`;
						let character = [info.sex, info.group, showHp, info.skills, info.tags];
						lib.character[name] = character;
						lib.translate[name] = info.translate;
						lib.characterPack[`mode_extension_${type}_${extension}`][name] = character;
						if (info.rank) {
							if (typeof info.rank === "object") {
								lib.rank.rarity[info.rank["rarity"]].push(name);
							}
							else lib.rank[info.rank].push(name);
						}
						if (info.des) {
							lib.characterIntro[name] = info.des;
						}
						if (info.catelogy) {
							if (!lib.characterSort[`mode_extension_${type}_${extension}`]) lib.characterSort[`mode_extension_${type}_${extension}`] = {};
							if (!lib.characterSort[`mode_extension_${type}_${extension}`][`${type}_${extension}_${info.catelogy}`]) lib.characterSort[`mode_extension_${type}_${extension}`][`${type}_${extension}_${info.catelogy}`] = [];
							lib.characterSort[`mode_extension_${type}_${extension}`][`${type}_${extension}_${info.catelogy}`].push(name);
						}
						if (info.replace) {
							if (!lib.characterReplace[info.replace]) lib.characterReplace[info.replace] = [info.replace];
							if (!lib.characterReplace[info.replace].contains(name)) lib.characterReplace[info.replace].push(name);
						}
					}

					let catelogy = {
						"Skealous": "天妒英才"
					}

					lib.translate[`mode_extension_${type}_${extension}_character_config`] = translate;
					lib.translate[`${type}_${extension}`] = translate;
					for (let name in catelogy) lib.translate[`${type}_${extension}_${name}`] = catelogy[name];
				}
			});
		},
		precontent: () => {

		},
		config: {},
		help: {},
		package: {
			intro: "",
			author: "Rintim",
			diskURL: "",
			forumURL: "",
			version: "0.0.0",
		}, files: { "character": [], "card": [], "skill": [] }
	};
})