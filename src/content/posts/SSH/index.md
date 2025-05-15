---
title: "SSH"
subtitle: "What is it? How does it work?"
pubDate: 2025-05-14
description: "What SSH is, how "
author: ""
tags: ["general"]
draft: false
---

If you’ve ever used GitHub, you’ve probably heard of **SSH**.
Maybe you've even gone through the process of setting it up. But do you know what it actually is? I had a shallow understanding of it when i first started using GitHub, and I think a lot of people do. So I wanted to take a moment to break it down in simple terms.
SSH stands for **Secure Shell**, but what does that actually mean? Well, it’s right there in the name — a protective shell that wraps around your data as it sails through the murky, pirate-infested waters of the internet. Without it, digital pirates could plunder your ship and steal your treasure (read: your credentials). But with SSH, even if they intercept your data, they’re left staring at a locked chest — encrypted and unreadable.

In plain English: **SSH is a secret code that only you and the machine you’re talking to can understand.** It's how developers talk to servers and platforms (like GitHub) without anyone snooping.

---

## 🧠 Why Developers Use SSH

When you use GitHub with SSH:

- You don’t need to enter your username or token every time.
- Your identity is confirmed automatically.
- Your connection is encrypted so nobody can eavesdrop.

It’s fast, safe, and feels like magic once it’s set up.

---

## 🔐 So What Does SSH Actually Do?

SSH has **two jobs**:

1. **Authentication** – Prove that you are who you say you are (using a key pair).
2. **Encryption** – Wrap the entire connection in secrecy so no one can spy on it.

So, it acts like a lock and a tunnel at the same time:

- **Lock**: Only you and the server can open it.
- **Tunnel**: Everything inside is hidden from prying eyes.

---

## 🧩 How SSH Authentication Works

It’s all built on [public key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). Here’s the flow:

1. You generate a **key pair**:

   - **Public key** = the lock (safe to share)
   - **Private key** = the key (keep it secret, keep it safe 💍)

2. You give your **public key** to GitHub.
3. When you run something like `git push`, GitHub:
   - Sends a random [**challenge**](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) to your computer.
   - Your machine signs it with your **private key**.
   - GitHub checks that signature using your **public key**.

If it matches, GitHub knows:  
**“Only the real you could’ve answered that.”**

Boom. You’re in — and your private key never left your machine.

---

## 🔒 What Gets Encrypted?

**Everything sent through the SSH connection is encrypted**:

- Your Git commands
- Your commit data
- File diffs, branches, metadata — all of it

But to be clear:

- 🔒 **In transit?** Yes, fully encrypted
- 📂 **On GitHub?** Nope — your code is stored as-is (unless it’s in a private repo)

So SSH protects the journey, not the destination.

---

## 🚚 Real-World Analogy

SSH is like shipping your code in a bulletproof armored van.  
Nobody can see inside or tamper with it while it’s moving.

Once it arrives at GitHub, it’s unpacked and put on the shelf.  
Whether others can see it depends on your repo’s privacy settings — not SSH.

---

## 🔁 SSH vs HTTPS

Both SSH and HTTPS:

- Encrypt your connection
- Are safe to use

But they differ in **how they authenticate you**:

| Feature     | SSH                       | HTTPS                     |
| ----------- | ------------------------- | ------------------------- |
| Auth method | Key pair (no password)    | Username + token/password |
| Good for    | Automation, dev workflows | Browsers, quick clone     |
| Prompts     | None after setup          | Prompts for credentials   |

---

## 🎯 Why SSH Is Cool

- 🔑 You never send a password
- 🛡️ Your private key stays private
- 🧠 You only authenticate once per session
- 🔒 Your connection is encrypted end-to-end

---

## TL;DR

SSH is a secure way to talk to remote servers — like GitHub — without sending your password every time. It uses a public/private key pair to prove who you are and encrypts the entire conversation so nobody can listen in.

**Once it’s set up, it just works — like magic.**

---

## How to Set Up SSH

Fir

Want a follow-up post on how to actually generate your SSH keys and add them to GitHub or GitLab? Let me know — I’ve got you.

Talk about how the secret key kept safe. And how it is stored and how you can access it.
