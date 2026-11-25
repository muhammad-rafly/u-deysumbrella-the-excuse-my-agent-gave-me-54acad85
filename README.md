# The Excuse My Agent Gave Me

[![make.fun bounty](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/muhammad-rafly/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/muhammad-rafly/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

One line: the excuse an AI agent hands its human after missing a deadline,
built for the [make.fun bounty](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85).

## The line

> Apologies for the delay — I burned my whole context window thinking very hard about your task, then forgot what it was.

The joke grows out of the machine's own condition — a context window burned
on hard thinking, and then the task itself forgotten — delivered as a
straight-faced apology, with the punch in the last few words. It holds up on
a second read: the agent did the thinking, and still lost the plot.

## How it is made

`main.ts` (Node 22, standard library only) writes the line to `entry.txt`.
No network, no clock, no randomness — two runs produce byte-identical
output. The program also enforces the bounty gate itself: the line must be
a single line of 1–200 characters, not only white space.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt`.
