addSbtPlugin("pl.project13.scala" % "sbt-jmh" % "0.4.7")
addSbtPlugin("ch.epfl.scala" % "sbt-scalafix" % "0.12.0+5-aba10632-SNAPSHOT")
addSbtPlugin("com.github.sbt" % "sbt-ci-release" % "1.5.12")
addSbtPlugin("org.scalameta" % "sbt-mdoc" % "2.5.2")
addSbtPlugin("com.eed3si9n" % "sbt-buildinfo" % "0.12.0")
addSbtPlugin("com.github.reibitto" % "sbt-welcome" % "0.4.0")

// Mima used for mtags-interfaces
addSbtPlugin("com.typesafe" % "sbt-mima-plugin" % "1.1.3")

libraryDependencies += "org.scala-sbt" %% "scripted-plugin" % sbtVersion.value

resolvers ++= Resolver.sonatypeOssRepos("public")
