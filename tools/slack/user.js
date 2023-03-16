var SlackBot = require("slackbots");

// create a bot
var bot = new SlackBot({
  token: "xoxb-23234125719-qKe8AGqqffVJT1ZHlXVWVFfi", // Add a bot https://my.slack.com/services/new/bot and put the token
  name: "gitlab"
});

bot.on("start", function() {
  // more information about additional params https://api.slack.com/methods/chat.postMessage
  var params = {
    icon_emoji: ":dog:"
  };
  var jira_task_url = `https://haymarketua.atlassian.net/browse/${
    process.env.JIRA_ID
  }|${process.env.JIRA_ID}`;
  var pipeline_url = `${process.env.PROJECT_URL}/pipelines/${
    process.env.PIPELINE_ID
  }`;
  var username = process.env.SLACK_USER.split("@")[0];

  if (process.env.MODE === "start") {
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    bot
      .postMessageToUser(
        username,
        `Building of <${jira_task_url}> is in progress. <${pipeline_url}|Watch the log>.`,
        params
      )
      .then(function(data) {
        process.exit();
      });
  }

  if (process.env.MODE === "success") {
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    bot
      .postMessageToUser(
        username,
        `Success! Please see the changes here: <https://prihcs.com${
          process.env.DEVELOPMENT_SUBFOLDER
        }>. See the <${pipeline_url}|pipeline log>`,
        params
      )
      .then(function(data) {
        process.exit();
      });
  }

  if (process.env.MODE === "fail") {
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    bot
      .postMessageToUser(
        username,
        `FAIL! See the <${pipeline_url}|Build log>.`,
        params
      )
      .then(function(data) {
        process.exit();
      });
  }

  if (process.env.MODE === "channel") {
    bot
      .postMessageToChannel(
        process.env.SLACK_CHANNEL,
        `<@U9NFQ0QF3> <@kirill.orlatyy> <@dmitriy.balakhov> please check <${jira_task_url}> via <https://prihcs.com${
          process.env.DEVELOPMENT_SUBFOLDER
        }>. By <@${username}>.`,
        params
      )
      .then(function(data) {
        process.exit();
      });
  }

  if (process.env.MODE === "success_tag") {
    bot
      .postMessageToChannel(
        process.env.SLACK_CHANNEL,
        `<@U9NFQ0QF3> <@kirill.orlatyy> <@dmitriy.balakhov> Staging version updated: <https://prihcs.com${
          process.env.DEVELOPMENT_SUBFOLDER
        }|https://prihcs.com${
          process.env.DEVELOPMENT_SUBFOLDER
        }>. By <@${username}>`,
        params
      )
      .then(function(data) {
        process.exit();
      });
  }

  if (process.env.MODE === "success_live") {
    bot
      .postMessageToChannel(
        process.env.SLACK_CHANNEL,
        `<@U9NFQ0QF3> <@kirill.orlatyy> <@dmitriy.balakhov> ${
          process.env.TAG
        } is deployed to <${process.env.DEVELOPMENT_SUBFOLDER}|${
          process.env.DEVELOPMENT_SUBFOLDER
        }>. By <@${username}>`,
        { icon_emoji: ":boom:" }
      )
      .then(function(data) {
        process.exit();
      });
  }
});
