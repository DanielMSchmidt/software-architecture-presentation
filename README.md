# Presentation zu "Relationships btwn QoS & software adaptability at the architectural level"

[Slides](https://github.com/DanielMSchmidt/software-architecture-presentation/raw/gh-pages/pdf/presentation.pdf)

## Notizen
(nach den Paper Kapiteln gegliedert)

### Einleitung

- Garantierte Anpassungsfähigkeit von Software kann andere Qualitätsattribute wie Geschwindigkeit, Verlässlichkeit und Wartbarkeit beeinflussen.
- Ansatz ist bei einem wechselnden Kontext nützlich, er wird benutzt um zu testen ob die ausgewählten Komponenten die Voraussetzungen des Systems erfüllen.

### ähnliche Arbeiten

- Quantifizierung des Grads der Anpassungsfähigkeit wichtig
- Korrelation mit Ansatz von "Yang et al. (2009)", welche eine Abwägungsanalyse zwischen Qualitätsattributen und Anpassungsfähigkeit darstellt. Dabei nimmt dieser Ansatz Änderungen des Kontextes mit auf und die Entscheidung eine Anpassungsstrategie zur Laufzeit auszuführen wenn das System den aktuellen Kontext kennt.
- Über heuristische Verfahren kann eine automatische Anpassung der Architektur erfolgen, hin zu einer Architektur, welche die Qualitätsmerkmale erfüllt oder nah dran ist.
- Die Grundsätze des hier gewählten Ansatzes sind ähnlich derer in "Egyed and Wile (2006)", obwohl das Ziel divergiert. Im Gegensatz zu diesen Verfahren wird die Menge der möglichen Architekturen reduziert, indem Ansätze, welche eine Einschränkung nicht erfüllen gelöscht werden.
- Die Ziele des Papers sind:
	- Eine erweiterte Menge von architekturellen Metriken die zur Evaluierung der Anpassungsfähigkeit des Systems verwendet werden können
	- Der Ansatz benutzt diese Metriken um die Beziehung zwischen Anpassungsfähigkeit und Qualitätswerten zu definieren, damit hilft dieser Ansatz bei der Begründung des Designs.
	- Ein Hilfsmittel bereitstellen um den Ansatz zu benutzen

### Achitekturbasierte Anpassungsfähigkeit messen

- Der Ansatz basiert auf einer Component-and-Connector Ansicht, da sie allgemein verwendet wird um über die Qualitätswerte zur Laufzeit zu reden.
