Kayn = require 'kayn'

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

  console.log kayn
  kayn.Summoner.by.name 'soldadomew'
    .then (data) =>
      console.log data



module.exports = routes
