+++
title = "Frequently Asked Questions"
weight = 4
+++

### I set my Value Provider, but it's laggy

In most cases, you'd better enable `async` ([Tutorial]({{% ref "spigot/extra/provider#asynchronous-provider" %}})) so that your provider is run on an asynchronous thread that doesn't affect your main server thread.
However, some providers may not support asynchronous run and require to run on the main thread. In that case, either you have to find one that supports and test it or ask the author of that provider to add support for that.

### I set my PlaceholderAPI's placeholder but it is not showing the value in the Top Holder

- Make sure that the placeholder you are using is valid and that the plugin that provides the placeholder is installed and working correctly.
- Try running the command `/papi parse me <placeholder>` to see if the placeholder is working as expected.
- Check if the placeholder is for online players only. If so, set the `online` option to `true` in the configuration.
- Try setting `show-errors` to `true` to see if there are any errors when parsing the placeholder. ([Tutorial]({{% ref "spigot/extra/provider#show-errors" %}}))
- If the placeholder is still not working, ask for help in the plugin's support channel or forum (remember to enable `show-errors` and provide the logs to them for better support).

### My placeholder gives a formatted value (e.g., 1,000.00 instead of 1000). Can I use it in the provider?

No, the placeholder provider only supports numerical values (only numbers and decimal separator `.` (dot) ).
You must use a placeholder that returns a raw number without formatting, if possible.
If the plugin that provides the placeholder does not have an option to return a raw number, you can try using a different placeholder or ask the plugin developer to add support for raw numbers.

If the value is a simple formatted number, you can try [Handling the Formatted Value]({{% ref "spigot/extra/provider#handle-formatted-values" %}}).

### How can I know if a placeholder works with Topper?

Here is a rough list of criteria that a placeholder should have in order to work with Topper:

- The placeholder should only returns raw number
  * That means it should only have digits and one `.` (dot) as a decimal separator
    * Work: `100`, `100.00`, `100.123`
    * Won't work: `abc`, `1,000,000`, `100,000.122`, `100.000.000`, `1 000 000`
- The placeholder should work with both online and offline players
- If the placeholder doesn't work with offline players, it should return an empty string or the placeholder itself
- If there is any error in the logic of the placeholder, it should return an empty string or the placeholder itself
