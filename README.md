# Triage Tool

This is a simple tool to find issues and PRs with activity in the N days (defaults to 7).

## Usage

```shell
node index.js 7
```

### Sample Output

```
✗ node index.js 2   

 clarinet
--------------------------------------------------------------------------------
503:    Tweaks from hackathon
          https://github.com/hirosystems/clarinet/pull/503
          Creator: lgalabru
423:    Revisit deno vendoring
          https://github.com/hirosystems/clarinet/issues/423
          Creator: lgalabru
          Assigned: lgalabru
439:    Config options precedence
          https://github.com/hirosystems/clarinet/issues/439
          Creator: moodmosaic
493:    Support encrypted mnemonics in settings files
          https://github.com/hirosystems/clarinet/issues/493
          Creator: obycode
492:    [feature request] Support STX transfers in deployments
          https://github.com/hirosystems/clarinet/issues/492
          Creator: hstove
434:    Feat/ls vscode commands
          https://github.com/hirosystems/clarinet/pull/434
          Creator: hugocaillard
502:    Docs ### Interacting with contracts deployed on Mainnet
          https://github.com/hirosystems/clarinet/pull/502
          Creator: dabuchera
501:    DevNet deployment: impl-trait of [[project.requirements]] contract not adjusted correctly by clarinet
          https://github.com/hirosystems/clarinet/issues/501
          Creator: dabuchera

 clarity-lsp
--------------------------------------------------------------------------------
114:    fix: highlighting escaped characters
          https://github.com/hirosystems/clarity-lsp/pull/114
          Creator: LNow
115:    [Snyk] Security upgrade node-fetch from 2.6.7 to 3.2.10
          https://github.com/hirosystems/clarity-lsp/pull/115
          Creator: CharlieC3

 orchestra
--------------------------------------------------------------------------------
5:      Oreo: Iteration #3 on chainhooks
          https://github.com/hirosystems/orchestra/issues/5
          Creator: lgalabru
          Assigned: lgalabru
```