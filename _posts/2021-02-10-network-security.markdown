---
title: "Network Security"
layout: post
date: 2021-02-10 22:10
tag: 
- Go
- DNS
- Tcpdump
- Proxy
headerImage: true
projects: true
hidden: true # don't count this post in blog pagination
description: "Network security projects"
category: project
author: amoghj8
externalLink: false
---

## Intro:


<p>I have been working on a few Network Security related projects. As a matter of fact, I was not acquainted with Go and got to learn and implement my projects using Go. In the end, I ended up developing 3 projects and they are described below.</p>

## DNS Packet Injection and Detection:

<p>descriptionDeveloped an on-path DNS poisoning attack tool, and a passive DNS poisoning attack detector. Both tools were developed in Go using the GoPacket library.

The DNS packet injector, "dnspoison", captures the traffic from a network interface in promiscuous mode and injects forged responses to selected DNS A requests with the goal of poisoning the cache of the victim's resolver.

The DNS poisoning attack detector, "dnsdetect", captures the traffic from a network interface in promiscuous mode and detects DNS poisoning attack attempts.
</p>

## Plugboard Proxy:

<p>
Developed a "plugboard proxy" for adding an extra layer of protection to publicly accessible network services. The program was written in Go using the Crypto library. It adds an extra layer of encryption to connections towards TCP services.

Instead of connecting directly to the service, clients connect to the plugboard proxy (running on the same server), which then relays all traffic to the actual service. Before relaying the traffic, the plugboard proxy always decrypts it using a static symmetric key. This means that if the data of any connection towards the protected server is not properly encrypted, then it will turn into garbage before reaching the protected service.
</p>

## Network Traffic Sniffing:

<p>
Developed a passive network monitoring application written in Go using the GoPacket library. The program captures the traffic from a network interface in promiscuous mode (or reads the
packets from a pcap trace file) and prints a record for each packet in its standard output, much like a simplified version of tcpdump. The user is able to specify a BPF filter for capturing a subset of the traffic, and/or a string pattern for capturing only packets with matching payloads.
</p>


## Links:

Source code is available at their repositories: 
- [DNS Packet Injection and Detection](https://github.com/amoghj8/DNS-Packet-Injection)
- [Plugboard Proxy](https://github.com/amoghj8/Plugboard-Proxy)
- [Network Traffic Sniffing](https://github.com/amoghj8/Network-Traffic-Sniffing)
