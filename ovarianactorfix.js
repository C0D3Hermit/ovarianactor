document.addEventListener('corru_entered', () => {
    env.COMBAT_ACTORS["ovarian"] = {
            slug: "ovarian",
            name: "Generic Ovarian",
            maxhp: 22,
            hp: 22,
            specialClass: "ovarianactor",
            initialStatusEffects: [["retaliation", 1], ["ovarianskin", 1]],
            actions: ["mad_claw", "focused_guard", "evade"],
            portrait: `<img class="portrait" src="https://file.garden/Zvmp0XAo2CYmToHG/ovarianprofile.gif">`,
            portraitUrl: 'https://file.garden/Zvmp0XAo2CYmToHG/ovarianprofile.gif',
            reactions: {
                evade: ["Close", "Nearly"],
                crit: ["YESSS!", "YES!!"],
                crit_buff: ["Here", "Friend"],
                miss: ["Man", "Sigh...", "Bird"], // bird
                dead: ["..."],
                puncture: [],
                regen: ["eehehehee", "khehahaha", "ahehe"],
                destabilized: ["Help me Sovereign", "?!?!?!", "Strange"],
                stun: ["My Legs", "Do you have any Ibuprofen?"],
                receive_hit: ["Ow", "uGh", "ow"],
                receive_crit: ["Rude", "You Bitch", "Owch"],
                receive_puncture: [],
                receive_buff: ["Thanks", "Good"],
                receive_destabilized: ["WhAt", "wHy", "hUh"],
                receive_rez: ["Rad", "Thanks Alot"],
                receive_carapace: [],
                receive_repairs: [],
                receive_fear: ["Scared", "Fear", "Fearing"],
                receive_redirection: ["Deprive me of battle? How dare you", "Okay then"],
            }
        },

        page.party.push({
            slug: "ovarian",
            name: "Generic Ovarian",
            class: "generic ovarian",
            hp: 22,
            combatActor: "ovarian"
        }),
        
        env.STATUS_EFFECTS["ovarianskin"] = { 
        slug: "ovarianskin",
        name: "Interchangable Skin",
        passive: "modifier",
        beneficial: true,
        icon: "https://file.garden/Zvmp0XAo2CYmToHG/tendrilsicon.gif",
        events: {
            onAddStatus: function({target, addingStatusName}) {
                if(addingStatusName == "spikes") {
                    addStatus({target: this.status.affecting, origin: false, status: "os_spiked", length: 1})
                }
            },
            onRemoveStatus: function({target, removingStatusName}) {
                if(removingStatusName == "spikes") {
                    addStatus({target: this.status.affecting, origin: false, status: "os_evade", length: 1})
                }
            },

            onBeforeCombatHit: function() {
                if(!hasStatus(this.status.affecting, "spikes")) {
                    addStatus(this.status.affecting, "os_evade")
                }
            },

            onCreated: function({statusObj}) {
                if(statusObj.slug == "uistatus" && !this.status.initialized) {
                    addStatus({target: this.status.affecting, origin: false, status: "os_evade", length: 1})
                    this.status.initialized = true
                    }
                },
        help: "able to form skin at will\ngives more defense if spikes is applied\ngives chance to evade more often if spikes is gone"
            },
        }
    
    env.STATUS_EFFECTS["os_evade"] = { 
        slug: "os_evade",
        name: "Ovarian Skin: Waterlike",
        passive: "modifier",
        beneficial: true,
        opposite: "os_spiked",
        removes: ["os_spiked"],
        silent: true,
        incomingToHit: -0.33,
        incomingToCrit: -0.33,
        incomingFlat: 2,
        icon: "https://file.garden/Zvmp0XAo2CYmToHG/tendrilsicon.gif",
        help: "become like water\n-33% chance to be hit/crit more often but take +2 amt damage if hit"
    },
    
    env.STATUS_EFFECTS["os_evade"] = { 
        slug: "os_evade",
        name: "Ovarian Skin: Statuelike",
        passive: "modifier",
        beneficial: true,
        opposite: "os_evade",
        removes: ["os_evade"],
        silent: true,
        incomingFlat: -4,
        outgoingToHit: 0.15,
        incomingToHit: 0.25,
        icon: "https://file.garden/Zvmp0XAo2CYmToHG/tendrilsicon.gif",
        help: "become like stone\nall incoming attack damage is reduced by 4 and you have +15% chance to hit more often but you have a +25% chance to be hit more often"
    },

content.insertAdjacentHTML('beforeend', `<style>
@font-face {
    font-family: 'ovarian';
    src: url('https://file.garden/Zvmp0XAo2CYmToHG/OvarianRunes.woff2') format('woff2'),
        url('https://file.garden/Zvmp0XAo2CYmToHG/OvarianRunes.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
           };

    .ovarianactor .name {
    color: var(--ovarian-color);
    font-family: ovarian;
    font-size: 3em;
    };
    
    .ovarianactor .combat-dialogue {
    font-family: ovarian;
    font-size: 2em;
    text-transform: initial;
};

.ovarianactor  .combat-dialogue::after {
    font-size: 1em;
};

/* REDEFINING ROOT TO HAVE OVARIAN COLOR */
    :root { 
    --dark-color: black;
    --bright-color: white;
    --friend-color: #00ffff;
    --obesk-color: #ff00ff;
    --neutral-color: #ffff00;
    --bastard-color: #ff0066;
    --fundfriend-color: #00ff66;
    --ovarian-color: #d900ffff;
    --baseTransform: translateX(0);

    --bigFont: 20px;
    --regularFont: 16px;
    --unitlessHeight: 1080px;

    --contentDialogueOffset: -12.5vw;
    
    font-feature-settings: "liga" 0;
    font-size: var(--regularFont);
}
    <style>`)
})