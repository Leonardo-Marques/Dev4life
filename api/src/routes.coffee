Kayn = require 'kayn'


QUEUES = {
  420: '(Summoner\'s Rift	) 5v5 Ranked Solo games'
}


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
        kayn.Matchlist.by.accountID summoner.accountId
          .query { endIndex: 10 }
          .then (data) =>
            res.json data
      .catch (err) =>
        res.status 412
          .json err: err





module.exports = routes
