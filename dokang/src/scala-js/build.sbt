name := "my-scalajs"

version := "0.1"

scalaVersion := "2.12.6"

enablePlugins(ScalaJSBundlerPlugin)

scalaJSUseMainModuleInitializer := true

libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.9.6"

libraryDependencies += "com.github.japgolly.scalajs-react" %%% "core" % "1.1.0"

libraryDependencies += "com.github.japgolly.scalajs-react" %%% "extra" % "1.1.0"

libraryDependencies += "com.lihaoyi" %%% "upickle" % "0.6.6"

libraryDependencies += "io.suzaku" %%% "diode" % "1.1.3"
libraryDependencies += "io.suzaku" %%% "diode-react" % "1.1.3"

npmDependencies in Compile ++= Seq(
  "react" -> "16.2.0",
  "react-dom" -> "16.2.0")


