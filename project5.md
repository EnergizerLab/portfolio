# PV Loss Tree

## Overview

PV Loss Tree is a renewable-energy portfolio project that explains how a photovoltaic system loses energy between ideal laboratory rating and real-world AC output. The page starts with a DC nameplate estimate and then subtracts practical loss factors one stage at a time. The result is a simple, visual model that shows where energy goes and why the final number is lower than the theoretical starting point.

This project is meant to feel like an engineering tool, not a toy calculator. It is useful for showing understanding of solar performance, field conditions, and the difference between ideal and realistic output.

## Main Purpose

The project answers one basic question:

How much of the solar array's ideal energy actually reaches the AC side after real-world losses?

To answer that, the page models the following stages:

- STC nameplate energy
- Temperature derating
- Shading loss
- Soiling loss
- Wiring and mismatch loss
- Inverter conversion loss
- Availability loss

Each stage is shown separately so the user can see both the cause of the loss and its effect on the final output.

## What PV Means

PV stands for photovoltaic. A photovoltaic system converts sunlight into electricity using solar modules.

In a PV system:

- DC means direct current. Solar panels generate DC power.
- AC means alternating current. Most loads and the grid use AC power.
- An inverter converts DC power into AC power.

This project starts with DC-side assumptions and ends with an AC-side result.

## What Loss Tree Means

A loss tree is a step-by-step breakdown of losses in a system.

In this project, the term means that each loss factor is applied in sequence. The output of one stage becomes the input to the next stage. That makes the decline in energy easy to follow.

Example:

- Start with the base DC energy.
- Apply temperature loss.
- Apply shading loss to the reduced value.
- Apply soiling loss to the new value.
- Continue until the final AC output is reached.

This gives a clearer picture than showing only one final efficiency number.

## Page Structure

The page has these main areas:

- Hero section
- Summary snapshot
- Input assumptions
- Loss tree results
- Quick action buttons
- Side notes about the model

### Hero Section

The hero section contains the project title and a short description.

Meaning of the text:

- See where PV energy disappears: the project is focused on energy losses, not just sizing.
- Compact PV performance tool: the page is small and easy to understand.
- Clear loss tree: the project turns technical loss factors into a visible sequence.

The hero card on the right shows the final AC output, which updates live as the user changes inputs.

### Input Assumptions

This section contains the controls that define the solar scenario.

The inputs are grouped into three categories:

- System sizing
- Field conditions
- Electrical losses

Each input changes the calculation immediately.

## Input Definitions

### PV size

PV size means the installed DC capacity of the solar array, measured in kilowatts peak, written as kWp.

Meaning:

- kW = kilowatt, a unit of power.
- p in kWp = peak rating under standard test conditions.
- A larger PV size usually produces more energy.

In the page, the default value is 6.4 kWp.

### Peak sun hours

Peak sun hours represent the equivalent number of hours per day when solar irradiance is strong enough to equal 1,000 W/m².

Meaning:

- This is a simplified way to estimate daily solar energy.
- It converts sunlight intensity into a daily energy estimate.
- It is not the same as daylight hours.

In the page, the default value is 5.8 hours.

### Module type

Module type refers to the solar panel technology used in the model.

Options:

- Monocrystalline: high-efficiency silicon modules.
- Polycrystalline: slightly lower efficiency and typically a weaker temperature response than monocrystalline in this model.
- Thin-film: a different module technology with a different thermal behavior.

The project uses the module type to change the temperature loss coefficient.

### Cell temperature

Cell temperature is the approximate temperature of the solar cells during operation.

Meaning:

- Solar modules get hotter than the air around them.
- Higher cell temperature usually lowers output.
- Heat reduces voltage and therefore usable power.

The default value is 52°C.

### Shading

Shading is the percentage of energy lost because part of the array is blocked from sunlight.

Meaning:

- This can come from trees, buildings, poles, or row-to-row interference.
- Partial shading can have a large impact on solar performance.
- In the page, shading is treated as a direct percentage loss.

The default value is 8.5%.

### Soiling

Soiling means dirt, dust, grime, or residue on the module surface.

Meaning:

- Dust blocks some sunlight from reaching the cells.
- Soiling is a common issue in dry or dusty environments.
- Cleaning intervals affect how much energy is lost.

The default value is 6%.

### Wiring and mismatch

This input groups two common electrical losses:

- Wiring loss: energy lost in cables because of resistance and voltage drop.
- Mismatch loss: loss caused when modules or strings do not perform equally.

Meaning:

- Longer cables can lose more energy.
- Small differences between modules can reduce the overall output of a string.
- This also includes small balance-of-system losses.

The default value is 4.2%.

### Inverter efficiency

Inverter efficiency is the percentage of DC power that the inverter successfully turns into AC power.

Meaning:

- No inverter is perfectly efficient.
- Some energy is always lost as heat or internal conversion loss.
- A higher number means less loss at the conversion stage.

The default value is 97.4%.

### Availability

Availability means the percentage of time the system is actually operating and producing energy.

Meaning:

- Downtime, maintenance, faults, or outages can reduce production.
- Even a good system can lose energy if it is offline.
- This represents operational reliability.

The default value is 98.7%.

## Output Definitions

The results section shows four main outputs.

### Retained energy

Retained energy is the percentage of the original energy that remains after all losses.

Meaning:

- This tells you how much of the base energy survives.
- A higher retained energy value means fewer losses.

### Total loss

Total loss is the portion of the original energy that was removed by the loss chain.

Meaning:

- It is the complement of retained energy.
- If retained energy is 80%, total loss is 20%.

### Base energy

Base energy is the initial daily energy estimate before losses.

Meaning:

- It is calculated from PV size multiplied by peak sun hours.
- It is a simplified starting point, not the final delivered output.

### AC output

AC output is the final energy after every loss factor is applied.

Meaning:

- This is the practical daily output delivered on the AC side.
- It is the main result the page is designed to show.

## Calculation Flow

The model uses a staged calculation.

### Step 1: Base energy

The starting estimate is:

Base energy = PV size x peak sun hours

This gives a simple daily energy starting point in kWh.

### Step 2: Temperature loss

The project subtracts temperature loss using a module-specific coefficient.

Meaning of the coefficient:

- It is the fraction of power lost per degree Celsius above 25°C.
- 25°C is treated as the reference temperature.
- Different module types have different temperature sensitivity.

### Step 3: Shading loss

A direct percentage is removed for shading.

Meaning:

- If shading is 8.5%, the model keeps 91.5% of the energy after the previous stage.

### Step 4: Soiling loss

A direct percentage is removed for dirt and dust.

### Step 5: Wiring and mismatch loss

A direct percentage is removed for electrical losses in the DC side and system mismatch.

### Step 6: Inverter conversion loss

The inverter efficiency is converted into a factor by dividing by 100.

Meaning:

- 97.4% efficiency becomes 0.974 as a multiplier.
- The remaining 2.6% is lost in conversion.

### Step 7: Availability loss

Availability is also converted into a factor and applied at the end.

Meaning:

- 98.7% availability becomes 0.987.
- The system is assumed to be offline for the remaining 1.3% of the time.

## Formula Meaning

The project does not subtract all losses from the base number in one step. Instead, it multiplies through each factor in sequence.

General meaning:

Final energy = Base energy x temperature factor x shading factor x soiling factor x wiring factor x inverter factor x availability factor

Why this matters:

- It is closer to how real PV systems behave.
- It avoids pretending that every loss acts independently on the original number.
- It gives a more realistic result.

## Visual Tree Meaning

The tree display is the main visual part of the page.

Each row includes:

- Stage label
- Short note
- Remaining energy after that stage
- Loss percentage
- Progress bar

Meaning of the row color and bar:

- The bar width shows how much energy is left.
- The label explains what the stage represents.
- The note explains why that loss exists.

The first row is the STC baseline. Later rows show how the value falls stage by stage.

## Controls and Interactivity

The page updates live when the user changes any control.

The JavaScript listens to input events from:

- Range sliders
- Select dropdown

Every time a value changes, the page recalculates all outputs.

This makes the tool feel interactive and lets the user explore scenarios quickly.

## Copy Summary Button

The Copy summary button copies a short one-line description of the current calculation.

Meaning:

- The button is useful for quick sharing.
- It gives a text version of the model result.
- It does not change the calculation.

The copied text includes:

- Base output
- Final output
- Total loss percentage

## Back to Projects Button

This button links back to the main portfolio page.

Meaning:

- It keeps navigation simple.
- It prevents the page from becoming a dead end.

## Side Notes Section

The right-side cards explain what the project shows.

### Model notes

This card explains that the assumptions stay visible so the model is easy to inspect.

### Loss breakdown

This card explains that each major loss category is separated instead of being hidden in a single score.

### Output

This card explains that the result is a compact daily estimate that feels like a field tool.

## Important Terms Glossary

### STC

STC means Standard Test Conditions.

Meaning:

- It is the standard lab condition used to rate solar modules.
- It uses a fixed irradiance, temperature, and air mass reference.
- Real-world performance is usually lower than STC ratings.

### DC

DC means direct current.

Meaning:

- Current flows in one direction.
- Solar modules produce DC power.

### AC

AC means alternating current.

Meaning:

- Current changes direction periodically.
- Most household loads and the grid use AC.

### Derating

Derating means reducing an ideal rating to account for real-world conditions.

Meaning:

- Solar systems rarely perform exactly at the ideal lab number.
- Heat, dirt, and electrical losses reduce performance.

### Availability

Availability means how often the system is ready and able to operate.

Meaning:

- A system with high availability spends more time producing energy.
- A system with low availability loses more energy to downtime.

### Balance of system

Balance of system, often shortened to BOS, means all the components besides the PV modules.

Meaning:

- Cabling
- Connectors
- Mounting hardware
- Protection devices
- Inverter and other support equipment

## What the Project Demonstrates

This project demonstrates that the portfolio owner understands:

- Solar performance basics
- Energy loss mechanisms
- Real-world PV operating conditions
- User-driven engineering calculations
- Clear visual explanation of technical concepts
- Front-end implementation with live updates

## Why the Project Is Useful in a Portfolio

This project is useful because it is specific, believable, and technically grounded.

It shows that the work is not just about building calculators. It shows the ability to explain how a renewable-energy system behaves in practice.

That is valuable for roles in:

- Renewable energy
- Solar engineering
- Electrical engineering support
- Project engineering
- Site engineering
- Technical documentation

## Limitations

The project is intentionally simplified.

It does not model every possible PV effect, such as:

- Detailed irradiance simulation
- Hour-by-hour weather data
- Detailed thermal modeling
- MPPT behavior
- Degradation over years
- Grid export constraints
- Storage integration

That is acceptable because the goal is clarity and portfolio presentation, not full engineering certification.

## Possible Future Improvements

If the project is expanded later, useful additions could include:

- Hourly irradiance data
- A Sankey diagram for visual flow losses
- Monthly performance comparison
- Site-specific weather input
- Location-based peak sun hour lookup
- Export to PDF or CSV
- Comparison between module types
- Loss sensitivity analysis

## File Reference

The live page for this project is [project5.html](project5.html).

This markdown file serves as a detailed explanation of the project logic, interface, assumptions, and terminology.
