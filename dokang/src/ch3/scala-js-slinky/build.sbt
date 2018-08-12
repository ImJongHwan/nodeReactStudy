name := "slinky-parts"

version := "0.1"

scalaVersion := "2.12.6"

enablePlugins(ScalaJSBundlerPlugin)

scalaJSUseMainModuleInitializer := true

libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.9.6"

libraryDependencies += "me.shadaj" %%% "slinky-core" % "0.4.3" // core React functionality, no React DOM
libraryDependencies += "me.shadaj" %%% "slinky-web" % "0.4.3" // React DOM, HTML and SVG tags
libraryDependencies += "me.shadaj" %%% "slinky-hot" % "0.4.3" // Hot loading, requires react-proxy package
libraryDependencies += "me.shadaj" %%% "slinky-scalajsreact-interop" % "0.4.3" // Interop with japgolly/scalajs-react

scalacOptions += "-P:scalajs:sjsDefinedByDefault"

// optional, but recommended; enables the @react macro annotation API
addCompilerPlugin("org.scalameta" % "paradise" % "3.0.0-M11" cross CrossVersion.full)

libraryDependencies += "com.lihaoyi" %%% "upickle" % "0.6.6"

npmDependencies in Compile ++= Seq(
  "react" -> "16.4.0",
  "react-dom" -> "16.4.0",
  "react-proxy" -> "1.1.8"
)
