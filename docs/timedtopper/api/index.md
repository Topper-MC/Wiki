---
title: API
---


This is a short tutorial on how to use the API.

## Adding the API to your project

The API file is published via [`JitPack`](https://jitpack.io/#Topper-MC/TimedTopperAPI). You can go to
the [JitPack](https://jitpack.io/#Topper-MC/TimedTopperAPI) page to get more information about adding the API to your
specific toolchain.

For example, if you are using Maven, add the following to your `pom.xml`:

```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>

<dependencies>
    <dependency>
        <groupId>com.github.Topper-MC</groupId>
        <artifactId>TimedTopperAPI</artifactId>
        <version>VERSION</version>
    </dependency>
</dependencies>
```

Replace `VERSION` with the latest version of the API. The latest version
is ![GitHub Release](https://img.shields.io/github/v/release/Topper-MC/TimedTopperAPI)

Remember to add `TimedTopper` as a `depend` or `softdepend` in your `plugin.yml`.

## Get the API instance

The main class of the API is `TimedTopperAPI`. You can get an instance of it using the following code:

```java
TimedTopperAPI api = TimedTopperAPI.getInstance();
```

## Use the API

The [JavaDoc](https://topper-mc.github.io/TimedTopperAPI/) provides detailed information about the API. You can go to
the [JavaDoc](https://topper-mc.github.io/TimedTopperAPI/) to learn more about the API.

Here are some examples of how to use the API:

```java
Player player;

// Get the available holders
Collection<String> names = api.getHolders();

// Get all data in the holder "money"
Map<UUID, TimedData> map = api.getData("money");

// Get the data of a player in the holder "money"
Optional<TimedData> data = api.getData("money", player.getUniqueId());
```
