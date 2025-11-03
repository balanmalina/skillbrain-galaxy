document.addEventListener("DOMContentLoaded", async () => {
    console.log("Pagina s-a încărcat");

    const navButtons = document.querySelectorAll(".nav-button");
    const contentSpace = document.querySelector(".content-space");
    const exploreButton = document.querySelector(".button-explore");

    let data = null;
    let activeCrew = 0;
    let activeTech = 0;

    try {
        const res = await fetch("./data/data.json");
        if (!res.ok) throw new Error("");
        data = await res.json();
        console.log("✅ Date încărcate:", data);
    } catch (err) {
        console.error(err);
        contentSpace.innerHTML = "<p></p>";
        return;
    }

    navButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const section = btn.textContent.trim().split(" ")[1].toLowerCase();
            navButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            renderSection(section);
        });
    });

    exploreButton.addEventListener("click", () => renderSection("destination"));

    function renderSection(section) {
        console.log("🔹 Schimbare secțiune:", section);
        document.body.className = section;
        contentSpace.innerHTML = "";

        switch (section) {
            case "home":
                renderHome();
                break;
            case "destination":
                renderDestination("Moon");
                break;
            case "crew":
                renderCrew(activeCrew);
                break;
            case "technology":
                renderTechnology(activeTech);
                break;
            default:
                contentSpace.innerHTML = "<p>Secțiune necunoscută.</p>";
        }
    }

    function renderHome() {
        contentSpace.innerHTML = `
            <h2 id="first-title">SO, YOU WANT TO TRAVEL TO</h2>
            <h1 id="second-title">SPACE</h1>
            <p id="paragraph-content">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the
                edge of it. Well sit back, and relax because we’ll give you a
                truly out of this world experience!
            </p>
        `;
        exploreButton.style.display = "inline-block";
    }

    function renderDestination(name) {
        const planet = data.destinations.find((p) => p.name === name);
        if (!planet) return;

        exploreButton.style.display = "none";

        contentSpace.innerHTML = `
            <div class="destination-left">
                <img src="${planet.images.png}" alt="${planet.name}" class="planet-image">
            </div>

            <div class="destination-text">
                <div class="planet-tabs">
                    ${data.destinations
                .map(
                    (d) => `
                            <button class="tab-btn ${d.name === name ? "active" : ""}">
                                ${d.name}
                            </button>
                        `
                )
                .join("")}
                </div>

                <h2>${planet.name}</h2>
                <p>${planet.description}</p>

                <div class="planet-info">
                    <p>
                        <strong>Avg. distance</strong>
                        <span>${planet.distance}</span>
                    </p>
                    <p>
                        <strong>Est. travel time</strong>
                        <span>${planet.travel}</span>
                    </p>
                </div>
            </div>
        `;

        contentSpace.querySelectorAll(".tab-btn").forEach((btn) => {
            btn.addEventListener("click", () =>
                renderDestination(btn.textContent.trim())
            );
        });
    }

    function renderCrew(index) {
        const member = data.crew[index];
        if (!member) return;

        exploreButton.style.display = "none";
        contentSpace.innerHTML = `
        <div class="crew-content">
            <div class="crew-text">
                <h3>${member.role}</h3>
                <h2>${member.name}</h2>
                <p>${member.bio}</p>
                <div class="dot-nav">
                    ${data.crew
                .map(
                    (_, i) =>
                        `<button class="dot ${i === index ? "active" : ""}" data-index="${i}"></button>`
                )
                .join("")}
                </div>
            </div>
            <img src="${member.images.png}" alt="${member.name}" class="crew-img">
        </div>
    `;

        contentSpace.querySelectorAll(".dot").forEach((dot) => {
            dot.addEventListener("click", (e) => {
                activeCrew = parseInt(e.target.dataset.index);
                renderCrew(activeCrew);
            });
        });
    }

    function renderTechnology(index) {
        const tech = data.technology[index];
        if (!tech) return;

        exploreButton.style.display = "none";
        contentSpace.innerHTML = `
    <div class="tech-section">
      <div class="tech-steps">
        ${data.technology
                .map(
                    (_, i) =>
                        `<button class="step ${i === index ? "active" : ""}" data-index="${i}">${i + 1}</button>`
                )
                .join("")}
      </div>

      <div class="tech-text">
        <h4>03 SPACE LAUNCH 101</h4>
        <h2>${tech.name}</h2>
        <p>${tech.description}</p>
      </div>

      <img src="${window.innerWidth < 768 ? tech.images.landscape : tech.images.portrait
            }" alt="${tech.name}" class="tech-img" />
    </div>
  `;

        contentSpace.querySelectorAll(".step").forEach((step) => {
            step.addEventListener("click", (e) => {
                activeTech = parseInt(e.target.dataset.index);
                renderTechnology(activeTech);
            });
        });
    }

    renderSection("home");
});


