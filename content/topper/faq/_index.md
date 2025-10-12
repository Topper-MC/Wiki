+++
title = "Frequently Asked Questions"
weight = 4
+++

### I set my Value Provider, but it's laggy

In most cases, you'd better enable `async` ([Tutorial]({{% ref "topper/extra/provider#asynchronous-provider" %}})) so that your provider is run on an asynchronous thread that doesn't affect your main server thread.
However, some providers may not support asynchronous run and require to run on the main thread. In that case, either you have to find one that supports and test it or ask the author of that provider to add support for that.

Some providers may have an `online` option that determines whether the provider should only be run for online players (like [PlaceholderAPI]({{% ref "topper/provider/placeholder" %}})). If so, you are recommended to enable it to avoid unnecessary computations for offline players.

For those who are using `statistic` placeholder in the [PlaceholderAPI Value Provider]({{% ref "topper/provider/placeholder" %}}), you are recommended to either enable `online` option or check out the built-in [Statistic Provider]({{% ref "topper/provider/statistic" %}}).

### My name isn't appearing in the Top Holder after I set it up

As Topper only registers players when they join the server, the issue can be solved by just re-joining the server.

### The Top Holder doesn't work

In most cases, there must be a reason why the holder is not working. Here are some common practices we gather from similar cases:

- **Check if the configuration is properly set up**: There are cases when there is a syntax error in the configuration file or the configuration is not formatted correctly. You should check the file with some validation tools such as [YAML Lint](https://www.yamllint.com/).
- **Check if the required settings are properly set up**: Make sure to check your settings against the wiki. There are cases when users mixed up the settings or forgot to set some required settings, so please read the wiki carefully.
- **Check if there is any errors**: Make sure to check your logs for any errors related to your Top Holder. If there isn't one, make sure to enable `show-errors` in the configuration ([Tutorial]({{% ref "topper/extra/provider#show-errors" %}})).

After all, there must be a reason why the holder is not working. Please check thoroughly and provide more details about the issue when you report it in the support channel.

### I set my PlaceholderAPI's placeholder but it is not showing the value in the Top Holder

- Make sure that the placeholder you are using is valid and that the plugin that provides the placeholder is installed and working correctly.
- Try running the command `/papi parse me <placeholder>` to see if the placeholder is working as expected.
- Check if the placeholder is for online players only. If so, set the `online` option to `true` in the configuration.
- Try setting `show-errors` to `true` to see if there are any errors when parsing the placeholder. ([Tutorial]({{% ref "topper/extra/provider#show-errors" %}}))
- If the placeholder is still not working, ask for help in the plugin's support channel or forum (remember to enable `show-errors` ([Tutorial]({{% ref "topper/extra/provider#show-errors" %}})) and provide the logs to them for better support).

### My placeholder gives a formatted value (e.g., 1,000.00 instead of 1000). Can I use it in the provider?

No, the placeholder provider only supports numerical values (only numbers and decimal separator `.` (dot) ).
You must use a placeholder that returns a raw number without formatting, if possible.
If the plugin that provides the placeholder does not have an option to return a raw number, you can try using a different placeholder or ask the plugin developer to add support for raw numbers.

If the value is a simple formatted number, you can try [Handling the Formatted Value]({{% ref "topper/extra/provider#handle-formatted-values" %}}).

### How can I know if a placeholder works with Topper?

Here is a rough list of criteria that a placeholder should have in order to work with Topper:

- The placeholder should only returns raw number
  * That means it should only have digits and one `.` (dot) as a decimal separator
    * Work: `100`, `100.00`, `100.123`
    * Won't work: `abc`, `1,000,000`, `100,000.122`, `100.000.000`, `1 000 000`
- The placeholder should work with both online and offline players
- If the placeholder doesn't work with offline players, it should return an empty string or the placeholder itself
- If there is any error in the logic of the placeholder, it should return an empty string or the placeholder itself

### I want to format the value returned by my placeholder in my leaderboard

First, you should ALWAYS use a placeholder that returns a raw number without formatting, if possible (Check the previous questions for more information).

Then in your query to get the value from the Top Holder, you can apply [Value Display]({{ ref "topper/extra/value_display" }}) to format the value.

In short, use the placeholder that returns a raw number when setting up the Top Holder, then apply Value Display settings when setting up the display of the leaderboard.

### I want to shorten the number (e.g. 1000000 to 1M)

The [Value Display function]({{ ref "topper/extra/value_display" }}) can be used to shorten the number. For example, `money:value:shorten` will shorten the number of the value in the `money` Top Holder.

### I am so confused about how to use Topper

Take a deep breath and read the wiki again. You should take it slow and read the wiki carefully as you can miss some important details if you read it too quickly. If you still have trouble, feel free to ask for help in the Discord server. Remember to provide a clear and concise description of your issue, including any relevant error messages or screenshots.
