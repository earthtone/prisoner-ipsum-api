'use strict'

const { ipsum } = require('@earthtone/prisoner-ipsum')

exports.ipsum = async (event, context, callback) => {
  var data

  if (!event.queryStringParameters) {
    // if no options passed in query params
    // return output of default usage

    data = ipsum()
  } else {
    let { p, s } = event.queryStringParameters

    // reassign default values if one query
    // param is passed in the request but not
    // the other...

    if (!p) {
      p = 1
    }

    if (!s) {
      s = 5
    }

    data = ipsum(p, s)
  }

  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ data })
  })
}
