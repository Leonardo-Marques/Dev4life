Kayn = require 'kayn'
timer = require 'timers'

QUEUES = {
  0: 	'Custom games'
  2:	'(Summoner\'s Rift) 	5v5 Blind Pick Games'
  4: 	'(Summoner\'s Rift) 	5v5 Ranked Solo Games'
  6: 	'(Summoner\'s Rift) 	5v5 Ranked Premade Games'
  7: 	'(Summoner\'s Rift) 	Co-op vs AI Games'
  8: 	'(Twisted Treeline) 	3v3 Normal Games'
  9: 	'(Twisted Treeline) 	3v3 Ranked Flex Games'
  14: 	'(Summoner\'s Rift) 	5v5 Draft Pick Games'
  16:	'(Crystal Scar) 	5v5 Dominion Blind Pick Games'
  17: 	'(Crystal Scar) 	5v5 Dominion Draft Pick Games'
  25: 	'(Crystal Scar) 	Dominion Co-op vs AI Games'
  31: 	'(Summoner\'s Rift) 	Co-op vs AI Intro Bot Games'
  32: 	'(Summoner\'s Rift) 	Co-op vs AI Beginner Bot Games'
  33: 	'(Summoner\'s Rift) 	Co-op vs AI Intermediate Bot Games'
  41: 	'(Twisted Treeline) 	3v3 Ranked Team Games'
  42: 	'(Summoner\'s Rift) 	5v5 Ranked Team Games'
  52: 	'(Twisted Treeline) 	Co-op vs AI Games'
  61: 	'(Summoner\'s Rift) 	5v5 Team Builder Games'
  65: 	'(Howling Abyss) 	5v5 ARAM Games'
  70: 	'(Summoner\'s Rift) 	One for All Games'
  72: 	'((Howling Abyss) 	1v1 Snowdown Showdown Games'
  73: 	'(Howling Abyss) 	2v2 Snowdown Showdown Games'
  75: 	'(Summoner\'s Rift) 	6v6 Hexakill Games'
  76: 	'(Summoner\'s Rift) 	Ultra Rapid Fire Games'
  78: 	'(Summoner\'s Rift) 	Mirrored One for All'
  83: 	'(Summoner\'s Rift)	Co-op vs AI Ultra Rapid Fire Games'
  91: 	'(Summoner\'s Rift) 	Doom Bots Rank 1 Games'
  92: 	'(Summoner\'s Rift) 	Doom Bots Rank 2 Games'
  93: 	'(Summoner\'s Rift) 	Doom Bots Rank 5 Games'
  96: 	'(Crystal Scar) 	Ascension Games'
  98: 	'(Twisted Treeline) 	6v6 Hexakill Games'
  100: 	'(Butcher\'s Bridge) 	5v5 ARAM Games'
  300: 	'(Howling Abyss) 	King Poro Games'
  310: 	'(Summoner\'s Rift) 	Nemesis Games'
  313: 	'(Summoner\'s Rift) 	Black Market Brawlers Games'
  315: 	'(Summoner\'s Rift) 	Nexus Siege Games'
  317: 	'(Crystal Scar) 	Definitely Not Dominion Games'
  318: 	'(Summoner\'s Rift) 	All Random URF Games'
  325: 	'(Summoner\'s Rift) 	All Random Games'
  400: 	'(Summoner\'s Rift) 	5v5 Draft Pick Games'
  410: 	'(Summoner\'s Rift) 	5v5 Ranked Dynamic Games'
  420: 	'(Summoner\'s Rift) 	5v5 Ranked Solo Games'
  430: 	'(Summoner\'s Rift) 	5v5 Blind Pick Games'
  440: 	'(Summoner\'s Rift) 	5v5 Ranked Flex Games'
  450: 	'(Howling Abyss) 	5v5 ARAM Games'
  460: 	'(Twisted Treeline) 	3v3 Blind Pick Games'
  470: 	'(Twisted Treeline) 	3v3 Ranked Flex Games'
  600: 	'(Summoner\'s Rift) 	Blood Hunt Assassin Games'
  610: 	'(Cosmic Ruins) 	Dark Star Games'
  800: 	'(Twisted Treeline) 	Co-op vs. AI Intermediate Bot Games'
  810: 	'(Twisted Treeline) 	Co-op vs. AI Intro Bot Games'
  820: 	'(Twisted Treeline) 	Co-op vs. AI Beginner Bot Games'
  830: 	'(Summoner\'s Rift) 	Co-op vs. AI Intro Bot Games'
  840: 	'(Summoner\'s Rift) 	Co-op vs. AI Beginner Bot Games'
  850: 	'(Summoner\'s Rift) 	Co-op vs. AI Intermediate Bot Games'
  940: 	'(Summoner\'s Rift) 	Nexus Siege Games'
  950: 	'(Summoner\'s Rift) 	Doom Bots Games /w difficulty voting'
  960: 	'(Summoner\'s Rift) 	Doom Bots Games'
  980: 	'(Valoran City Park) 	Star Guardian Invasion: Normal Games'
  990: 	'(Valoran City Park) 	Star Guardian Invasion: Onslaught Games'
}

LANE = {
  BOTTOM: 'BOT'
  TOP: 'TOP'
  JUNGLE: 'JUNGLE'
  MID: ''
}

URL_STATIC = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/'

routes = (app) =>
  kayn = Kayn.Kayn('RGAPI-2b0b2fc6-a141-479c-8d53-3919585145bd')({
    region: 'br',
    debugOptions: {
      isEnabled: true,
      showKey: false,
    },
    requestOptions: {
      shouldRetry: true,
      numberOfRetriesBeforeAbort: 3,
      delayBeforeRetry: 1000,
      burst: true,
    },
    cacheOptions: {
      cache: null,
      ttls: {},
    },
  })


  app.get '/summoner/:nickname', (req, res) =>
    nick = req.params.nickname
    console.log nick
    kayn.Summoner.by.name nick
      .then (summoner) =>
        console.log kayn.Static.Champion.limiter.appLimits
        kayn.Matchlist.by.accountID summoner.accountId
          .query { endIndex: 10 }
          .then (response) =>
            matches = response.matches
            matches.forEach (match, index) =>
              codeQueue = match.queue
              response.matches[index].queue = QUEUES[codeQueue] || match.queue
              if match.lane is 'BOTTOM'
                response.matches[index].lane = 'BOT's
              return
            res.json response
            return
      .catch (err) =>
        res.status 412
          .json err: err
        return




module.exports = routes
